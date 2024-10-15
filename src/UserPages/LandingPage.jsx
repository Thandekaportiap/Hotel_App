import React from 'react'

import Slide from '../components/Slide'

const LandingPage = () => {
    const images = [
        { src: require('../assets/hotel2.avif'), label: 'CUBE' },
        { src: require('../assets/Hotel1.jpg'), label: 'Fredriksberg' },
        { src: require('../assets/hotel3.jpg'), label: 'Woodside' },
        { src: require('../assets/hotel4.jpg'), label: 'Viewpoint' },
        { src: require('../assets/hotel5.jpg'), label: 'Sweden' },
    ];
  return (
    <>
   <section className='bg-[#68bbe3]'>
   <Slide images={images}/>
    <div id="search-bar" class="w-120 bg-white rounded-md shadow-lg z-10">
    <form class="flex items-center justify-center p-2">
        <input type="text" placeholder="Search here"
            class="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
            <span>From</span>
            <input type="date" />
            to
            <input type="date" />
        <button type="submit"
            class="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Search
        </button>
    </form>
</div>
   </section>
    </>
  )
}

export default LandingPage
