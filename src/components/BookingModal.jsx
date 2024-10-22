import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getDocs, query, where, collection } from 'firebase/firestore'; // Assuming you're using Firebase Firestore
import { db } from '../components/Firebase'; // Import Firebase

const stripePromise = loadStripe('pk_test_51QBwYZA9hsbb7bPk3qURxjQEH9qKpNV9wWbVrvqwBdAE9bwscO3RjzcRcrw6RcfGwoClNsqvBCkz2dwxabzRvGCN00TAomN0jY');

const BookingModal = ({ isOpen, onClose, roomName, room, customerId, onBook }) => {
    const [customerName, setCustomerName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [unavailableDates, setUnavailableDates] = useState([]); // For storing booked dates

    // Fetch bookings for the room and mark unavailable dates
    useEffect(() => {
        if (room.id) {
            fetchUnavailableDates(room.id);
        }
    }, [room.id]);

    // Function to fetch unavailable dates for the room
    const fetchUnavailableDates = async (roomId) => {
        const bookingsQuery = query(
            collection(db, 'bookings'),
            where('roomId', '==', roomId)
        );
        const snapshot = await getDocs(bookingsQuery);
        const bookedDates = [];

        snapshot.docs.forEach(doc => {
            const booking = doc.data();
            let current = new Date(booking.checkInDate);

            // Loop through each booked day and add to bookedDates
            while (current <= new Date(booking.checkOutDate)) {
                bookedDates.push(new Date(current));
                current.setDate(current.getDate() + 1);
            }
        });

        setUnavailableDates(bookedDates);
    };

    // Function to check if the selected dates overlap with any unavailable dates
    const isDateUnavailable = (date) => {
        return unavailableDates.some(unavailableDate => 
            date.toDateString() === unavailableDate.toDateString());
    };

    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const days = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
            if (days > 0) {
                setTotalPrice(days * room.price);
            } else {
                setTotalPrice(0);
            }
        }
    }, [checkInDate, checkOutDate, room.price]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (new Date(checkInDate) >= new Date(checkOutDate)) {
            alert('Check-out date must be after check-in date');
            return;
        }

        const bookingData = {
            roomId: room.id,
            userId: room.userId,
            customerName,
            contactInfo,
            numberOfGuests,
            checkInDate,
            checkOutDate,
            roomName,
            customerId,
            price: totalPrice,
        };

        setBookingDetails(bookingData);
    };

    const handlePaymentSuccess = async (paymentDetails) => {
        const finalBookingDetails = {
            ...bookingDetails,
            paymentDetails,
        };

        onBook(finalBookingDetails);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="mb-4 text-2xl font-bold">Book {roomName}</h2>

                {!bookingDetails ? (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Name:</label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Contact Info:</label>
                            <input
                                type="text"
                                value={contactInfo}
                                onChange={(e) => setContactInfo(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Number of Guests:</label>
                            <input
                                type="number"
                                min="1"
                                value={numberOfGuests}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Check-in Date:</label>
                            <DatePicker
                                selected={checkInDate}
                                onChange={date => setCheckInDate(date)}
                                minDate={new Date()}
                                excludeDates={unavailableDates}  // Disable unavailable dates
                                className="w-full p-2 border rounded"
                                placeholderText="Select a check-in date"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Check-out Date:</label>
                            <DatePicker
                                selected={checkOutDate}
                                onChange={date => setCheckOutDate(date)}
                                minDate={checkInDate}
                                excludeDates={unavailableDates}  // Disable unavailable dates
                                className="w-full p-2 border rounded"
                                placeholderText="Select a check-out date"
                            />
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Total Price: R{totalPrice}</h3>
                        </div>

                        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
                            Proceed to Payment
                        </button>
                        <button type="button" onClick={onClose} className="px-4 py-2 ml-4 text-white bg-gray-500 rounded">
                            Cancel
                        </button>
                    </form>
                ) : (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={totalPrice * 100} onPaymentSuccess={handlePaymentSuccess} />
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
