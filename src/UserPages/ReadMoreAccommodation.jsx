import React from 'react'
import ProgressSlideCarousel from '../components/ReadMoreSlide'
import { useParams } from 'react-router-dom';


const ReadMoreAccommodation = () => {
  const { id } = useParams(); 
const room =[
  {
    name :" Mountain Views & Home Comforts",
    roomSpace:"1 Queen Bed",
    price:"R450 per night",
    discription: "Step into our gardens and soak in the views of the beautiful Central Drakensberg from the Executive Premium Rooms located on our hotel’s ground floor. With a king size bed, unlimited WiFi, a mini lounge with flat-screen DStv equipped television, air-conditioning, a bar fridge, and more, it’s full of home comforts for you to enjoy during your stay in the Berg. The room is en-suite and has both a bath and separate shower for your convenience and relaxation.",
    Occupancy: 2,
    Amenities: "Accessibility Features,TV,Air Conditioning,WiFi,Parking,Mini Bar"
  },
  
]
  return (
    <section>
    <ProgressSlideCarousel/>
    </section>
  )
}

export default ReadMoreAccommodation
