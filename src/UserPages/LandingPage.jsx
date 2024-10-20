import React from 'react'

import Slide from '../components/Slide'
import AccomCard from '../components/AccomCard'

const LandingPage = () => {
    const images = [
        { src: require('../assets/hotel3.jpg'), label: 'Woodside' },
        { src: require('../assets/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg'), label: 'Viewpoint' },
        { src: require('../assets/hotel5.jpg'), label: 'Sweden' },
    ];
  return (
    <>
   <section className='py-2 '>
   <Slide images={images}/>
   <div id="search-bar" className="z-10 w-3/4 p-4 mx-auto bg-white rounded-md shadow-lg">
    <form className="flex items-center justify-center space-x-2">
        <input type="text" placeholder="Search here"
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
        <span className="text-gray-700">From</span>
        <input type="date" className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        <span className="text-gray-700">to</span>
        <input type="date" className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
        <button type="submit"
            className="bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Search
        </button>
    </form>
</div>

<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
    {images.map((image, index) => (
        <AccomCard key={index} list={image} />
    ))}
</div>
   </section>
    </>
  )
}

export default LandingPage
