import React from 'react';
import { useSelector } from 'react-redux';
import BookingsList from '../components/BookingsList';
import { selectUserId } from '../features/UsersSlice';

const Bookings = () => {
  const userId = useSelector(selectUserId); 

  return (
    <div>
      <h1 className="font-serif text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#003060] to-[#68bbe3] p-2 my-6" >Your Bookings</h1>
      <BookingsList userId={userId} />
    </div>
  );
}

export default Bookings;
