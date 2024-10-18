import React from 'react';
import { useSelector } from 'react-redux';
import BookingsList from '../components/BookingsList';
import { selectUserId } from '../features/UsersSlice';

const Bookings = () => {
  const userId = useSelector(selectUserId); // Use useSelector to get the userId from the store

  return (
    <div>
      <h1>Your Bookings</h1>
      <BookingsList userId={userId} /> {/* Pass the userId to BookingsList */}
    </div>
  );
}

export default Bookings;
