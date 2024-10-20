import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; 

const stripePromise = loadStripe('your_publishable_key_here');

const BookingModal = ({ isOpen, onClose, roomName, room, customerId, onBook }) => {
    const [customerName, setCustomerName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // Track booking confirmation

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate check-in and check-out dates
        if (new Date(checkInDate) >= new Date(checkOutDate)) {
            alert('Check-out date must be after check-in date');
            return;
        }

        const bookingDetails = {
            roomId: room.id,
            userId: room.userId,
            customerName,
            contactInfo,
            numberOfGuests,
            checkInDate,
            checkOutDate,
            roomName,
            customerId,
            price: room.price,
        };
        
        onBook(bookingDetails);
        setIsBookingConfirmed(true); // Mark booking as confirmed, trigger payment
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-bold">Book {roomName}</h2>

                {!isBookingConfirmed ? (
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
                            <input
                                type="date"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Check-out Date:</label>
                            <input
                                type="date"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
                            Confirm Booking
                        </button>
                        <button type="button" onClick={onClose} className="px-4 py-2 ml-4 text-white bg-gray-500 rounded">
                            Cancel
                        </button>
                    </form>
                ) : (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={room.price * 100} onClose={onClose} />
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
