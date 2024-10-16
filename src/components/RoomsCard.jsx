import React from 'react';

const RoomsCard = ({ list }) => {
  return (
    <div className="w-full mt-4">
      <div
        className="bg-white grid sm:grid-cols-2 items-center shadow-lg rounded-lg font-sans overflow-hidden mx-auto transition-transform duration-300 hover:scale-105 p-6"
      >
        <div className="h-40 sm:h-48 mb-4 sm:mb-0">
          <img src={list.src} alt="Room" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="p-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="font-serif text-4xl font-semibold text-gray-800">{list.label}</h3>
                <span className="mt-2 text-2xl text-gray-600 leading-relaxed text-right">{list.feat}</span>
              </div>
              <div className="flex flex-row justify-between items-center mb-4">
                <span className="block text-2xl text-gray-500">Beds: {list.beds}</span>
                <span className="block text-2xl text-gray-500">Occupancy: {list.occupancy}</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="26px" className="cursor-pointer fill-blue-600 shrink-0"
                viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>

              <button className='mt-4 bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-200'>
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
