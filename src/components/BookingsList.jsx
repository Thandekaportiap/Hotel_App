import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, updateBooking, deleteBooking, selectBookings, selectLoading, selectError } from '../features/Booking/BookingAdminSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';

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

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className='bg-white rounded-lg shadow-lg shadow-[#003060] p-6 text-[#003060]'>
        <h1 className='text-2xl font-sans font-semibold capitalize'>your upcoming bookings</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id} className="border-b py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className='text-2xl'>Room: {booking.roomName}</h2>
                <p>Check-in: {booking.checkInDate}</p>
                <p>Check-out: {booking.checkOutDate}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(booking)} className="text-blue-500 hover:text-blue-700">
                  <FaEdit size={20} />
                </button>
                <button onClick={() => handleDelete(booking.id)} className="text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
            {editingId === booking.id && (
              <form onSubmit={handleUpdate} className="mt-4">
                <input
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  className="border rounded p-2 mr-2"
                  placeholder="Check-in Date"
                />
                <input
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  className="border rounded p-2 mr-2"
                  placeholder="Check-out Date"
                />
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Update</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
