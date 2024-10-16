import React from 'react';

const RoomsCard = ({ list }) => {
  return (
    <div className="w-full mt-4">
      <div
        className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-lg font-[sans-serif] overflow-hidden mx-auto"
      >
        <div className="h-40 sm:h-48"> 
          <img src={list.src} alt="Room" className="object-cover w-full h-full" />
        </div>

        <div className="p-4"> 
          <h3 className="text-xl font-semibold">{list.label}</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">{list.feat}</p>
          <span>Beds: {list.beds}</span>
          <span>Occupancy: {list.occuppancy}</span>
        </div>
      </div>
    </div>
  );
}

export default RoomsCard;
