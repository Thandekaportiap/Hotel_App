import React from 'react'
import ManageCard from '../components/ManageCard';

const backgroundImage = require("../assets/resort.jpg")

const ManageAccommodations = () => {

    const images = [
        { src: require('../assets/hotel3.jpg'), label: 'Woodside' },
        { src: require('../assets/hotel1.jpg'), label: 'Viewpoint' },
        { src: require('../assets/hotel5.jpg'), label: 'Sweden' },
    ];
  return (
   <section>
    
        <div className="bg-cover bg-center bg-no-repeat h-[250px]" style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className="room text-center text-white text-4xl font-bold p-8">Manage Accommodations </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
            {images.map((list, index) => (
                <ManageCard key={index} list={list}/>
            ))}
        </div>

        <button className='bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-200 m-4'>
            Add New Accommodation       </button>
    
   </section>
  )
}

export default ManageAccommodations
