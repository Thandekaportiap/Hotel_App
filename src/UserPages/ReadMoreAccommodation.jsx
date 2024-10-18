import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAccommodationList } from '../features/Accommodation/AccommodationListSlice';
import BookingModal from '../components/BookingModal';
import { submitBooking } from '../features/Booking/BookingsSlice';


const ReadMoreAccommodation = ({ customerId }) => {
  console.log(customerId)

  const { id } = useParams(); 
  console.log(id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accommodationList, loading, error } = useSelector((state) => state.accommodations);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAccommodationList());
}, [dispatch]);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;

const room = accommodationList.find(item => item.id === id);

if (!room) {
    return <div>Room not found.</div>;
}

const handleBook = (bookingDetails) => {
    dispatch(submitBooking(bookingDetails)); 
    setIsModalOpen(false); // Close the modal
};

  return (
    <section className='flex items-center justify-center min-h-screen '>
      <div className="justify-center items-center max-w-full mx-auto p-6  rounded-lg shadow-md shadow-[#003060] ">
        <h1 className="name text-6xl font-bold mb-4 text-center text-[#003060]">{room.name}</h1>
        <img src={room.imageUrl} alt={room.name} className="w-full h-60 object-cover rounded-lg mb-4" />
        <hr className="border-t border-[#68bbe3] my-2" />
        <p className="text-2xl text-center text-[#003060] font-sans">{room.description}</p>
     
        <hr className="border-t border-[#68bbe3] my-2" />
        <ul className='text-center text-[#003060] font-sans text-2xl'>
          <li><i className="fas fa-map-marker-alt mr-2 my-2 p-2"></i>Location: {room.location}</li>
          <li><i className="fas fa-dollar-sign mr-2 my-2 p-2"></i>Price: R{room.price}</li>
          <li><i className="fas fa-user-friends mr-2 my-2 p-2"></i>Capacity: {room.capacity}</li>
          <li><i className="fas fa-cog mr-2 my-2 p-2"></i>Amenities: {room.amenities}</li>
          <li><i className="fas fa-clock mr-2 my-2 p-2"></i>Check-in Time: {room.checkInTime}</li>
          <li><i className="fas fa-clock mr-2 my-2 p-2"></i>Check-out Time: {room.checkOutTime}</li>
        </ul>
        {/* <hr className="border-t border-[#68bbe3] my-2" /> */}
        <div className='flex justify-between items-center mt-4'>
          <button onClick={() => navigate('/accommodations')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Back to Accommodations
          </button>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)} >
            Book
          </button>
        </div>
      </div>
      <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                roomName={room.name} 
                onBook={handleBook} 
                room={room}
                customerId={customerId} 
            />
    </section>
  );
}

export default ReadMoreAccommodation;
