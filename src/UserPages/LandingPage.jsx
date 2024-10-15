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
    <Slide images={images}/>
    </>
  )
}

export default LandingPage
