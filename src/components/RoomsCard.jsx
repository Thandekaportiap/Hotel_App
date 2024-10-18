import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../components/Firebase'; 
import { collection, addDoc } from 'firebase/firestore';

const RoomsCard = ({ list, customerId }) => {
    
        const [isLiked, setIsLiked] = useState(false); 
        const navigate = useNavigate

    const handleLikeClick = async () => {
        if (!customerId) {
          navigate('/login/customer');
        } else {
          const favoriteData = {
            roomId: list.id,
            roomDetails: list,
            customerId,
          };
          
          try {
            await addDoc(collection(db, 'favorites'), favoriteData);
            alert('Room added to favorites!');
          } catch (error) {
            console.error('Error adding to favorites: ', error);
          }
        }
      };

      const toggleLike = () => {
        setIsLiked(!isLiked); // Toggle the liked state
        handleLikeClick(); // Call the like handler
      };

    const handleViewList = (listId) => {
        navigate(`/${listId}`); 
    };

  return (
    <div className="w-full mt-4">
      <div
        className="bg-white grid sm:grid-cols-2 items-center shadow-lg rounded-lg font-sans overflow-hidden mx-auto transition-transform duration-300 hover:scale-105 p-6"
      >
        <div className="h-40 sm:h-48 mb-4 sm:mb-0">
          <img src={list.imageUrl} alt="Room" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="p-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="font-serif text-4xl font-semibold text-gray-800">{list.name}</h3>
                <span className="mt-2 text-2xl text-gray-600 leading-relaxed text-right">{list.amenities}</span>
              </div>
              <div className="flex flex-row justify-between items-center mb-4">
                <span className="block text-2xl text-gray-500">Beds: {list.numberOfBeds}</span>
                <span className="block text-2xl text-gray-500">Occupancy: {list.capacity}</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
            <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="26px"
      width="36px"
      className={`cursor-pointer ${isLiked ? 'fill-red-500' : 'fill-gray-500'} shrink-0`}
      onClick={toggleLike}
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      /></svg>

              <button className='mt-4 bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-200'
              onClick={() => handleViewList(list.id)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
