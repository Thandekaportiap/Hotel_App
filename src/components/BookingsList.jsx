// components/BookingsList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, updateBooking, deleteBooking, selectBookings, selectLoading, selectError } from '../features/Booking/BookingAdminSlice';

const BookingsList = ({ userId }) => {
  const dispatch = useDispatch();
  const bookings = useSelector(selectBookings);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    dispatch(fetchBookings(userId));
  }, [dispatch, userId]);

  const handleEdit = (booking) => {
    setEditingId(booking.id);
    setFormData(booking);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBooking({ id: editingId, data: formData }));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <div>
              <h2>{booking.roomName}</h2>
              <p>Check-in: {booking.checkInDate}</p>
              <p>Check-out: {booking.checkOutDate}</p>
              <button onClick={() => handleEdit(booking)}>Edit</button>
              <button onClick={() => handleDelete(booking.id)}>Delete</button>
            </div>
            {editingId === booking.id && (
              <form onSubmit={handleUpdate}>
                <input
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                />
                <input
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                />
                <button type="submit">Update</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
