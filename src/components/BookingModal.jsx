import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, roomName, onBook }) => {
    const [customerName, setCustomerName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = {
            customerName,
            contactInfo,
            checkInDate,
            checkOutDate,
            roomName,
        };
        onBook(bookingDetails);
        onClose(); // Close the modal after booking
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Book {roomName}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name:</label>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Contact Info:</label>
                        <input
                            type="text"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Check-in Date:</label>
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Check-out Date:</label>
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Confirm Booking
                    </button>
                    <button type="button" onClick={onClose} className="ml-4 bg-gray-500 text-white py-2 px-4 rounded">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
