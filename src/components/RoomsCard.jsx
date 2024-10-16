import React from 'react';

const RoomsCard = ({ list }) => {
  return (
    <div className="w-full mt-4">
      <div
        className="bg-white grid sm:grid-cols-2 items-center shadow-lg rounded-lg font-sans overflow-hidden mx-auto transition-transform duration-300 hover:scale-105"
      >
        <div className="h-40 sm:h-48">
          <img src={list.src} alt="Room" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="p-6">
        <div className="flex flex-row justify-between items-center">
        <h3 className="font-serif text-4xl font-semibold text-gray-800">{list.label}</h3>
         <span className="mt-2 text-2xl text-gray-600 leading-relaxed text-right">{list.feat}</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="block text-2xl text-gray-500 mt-1">Beds: {list.beds}</span>
          <span className="block text-2xl text-gray-500 mt-1">Occupancy: {list.occupancy}</span>
          </div>
          <button className='mt-4 bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-200'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
