import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerBookingHistory, selectCustomerBookingHistory, selectLoading, selectError } from '../features/Booking/BookingHistory'; // Updated path and imports
import { selectUserId } from '../features/UsersSlice'; // For getting logged-in customer ID

const BookingHistory = () => {
  const dispatch = useDispatch();
  const customerId = useSelector(selectUserId); // Get the logged-in customer's ID
  const customerBookings = useSelector(selectCustomerBookingHistory); // Use updated selector
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (customerId) {
      dispatch(fetchCustomerBookingHistory(customerId)); // Dispatch updated action
    }
  }, [dispatch, customerId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Your Booking History</h1>
      {customerBookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {customerBookings.map((booking) => (
            <li key={booking.id} className="border-b py-4">
              <h2 className="text-xl">Room: {booking.roomName}</h2>
              <p>Check-in: {new Date(booking.checkInDate).toLocaleDateString()}</p>
              <p>Check-out: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
              <p>Total Paid: ₹{booking.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
