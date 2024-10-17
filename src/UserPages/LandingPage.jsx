import React from 'react'

import Slide from '../components/Slide'
import AccomCard from '../components/AccomCard'

const LandingPage = () => {
    const images = [
        // { src: require('../assets/hotel2.avif'), label: 'CUBE' },
        // { src: require('../assets/Hotel1.jpg'), label: 'Fredriksberg' },
        { src: require('../assets/hotel3.jpg'), label: 'Woodside' },
        { src: require('../assets/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg'), label: 'Viewpoint' },
        { src: require('../assets/hotel5.jpg'), label: 'Sweden' },
    ];
  return (
    <>
   <section className='bg-[#0e86d4] py-2'>
   <Slide images={images}/>
   <div id="search-bar" className="w-3/4 mx-auto bg-white rounded-md shadow-lg p-4 z-10">
    <form className="flex items-center justify-center space-x-2">
        <input type="text" placeholder="Search here"
            className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
        <span className="text-gray-700">From</span>
        <input type="date" className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600" />
        <span className="text-gray-700">to</span>
        <input type="date" className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600" />
        <button type="submit"
            className="bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Search
        </button>
    </form>
</div>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {images.map((image, index) => (
        <AccomCard key={index} list={image} />
    ))}
</div>
   </section>
    </>
  )
}

export default LandingPage
