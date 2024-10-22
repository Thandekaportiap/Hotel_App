import React, { useEffect, useState } from 'react';
import Slide from '../components/Slide';
import RoomsCard from '../components/RoomsCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodationList } from '../features/Accommodation/AccommodationListSlice';

function AccommodationsPage({ customerId }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { accommodationList, loading, error } = useSelector((state) => state.accommodations);
    
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [filteredRooms, setFilteredRooms] = useState([]);

    useEffect(() => {
        dispatch(fetchAccommodationList());
    }, [dispatch]);

    // Initially show all rooms when component mounts
    useEffect(() => {
        setFilteredRooms(accommodationList);
    }, [accommodationList]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const images = [
        { src: require('../assets/hotel3.jpg'), label: 'Woodside', id: 1 },
        { src: require('../assets/hotel2.avif'), label: 'Viewpoint', id: 2 },
        { src: require('../assets/hotel5.jpg'), label: 'Sweden', id: 3 },
    ];

    const handleSearch = (e) => {
        e.preventDefault();

        if (!checkInDate || !checkOutDate) {
            alert('Please select both check-in and check-out dates.');
            return;
        }

        console.log('Search initiated with dates:', checkInDate, checkOutDate);

        // Filter available rooms based on the selected date range
        const filtered = accommodationList.filter((room) => {
            // Assume each room has a bookings array with booking objects that have checkInDate and checkOutDate
            if (!room.bookings || room.bookings.length === 0) return true; // No bookings, room is available

            return room.bookings.every((booking) => {
                const bookingStart = new Date(booking.checkInDate);
                const bookingEnd = new Date(booking.checkOutDate);
                const searchStart = new Date(checkInDate);
                const searchEnd = new Date(checkOutDate);

                // Check if the room is available (i.e., no overlap with existing bookings)
                return (searchEnd <= bookingStart || searchStart >= bookingEnd);
            });
        });

        console.log('Filtered Rooms: ', filtered);

        // Update the filtered rooms in the state
        setFilteredRooms(filtered);
    };

    return (
        <>
            <section className='bg-[#0e86d4]'>
                <Slide images={images} />

                <div id="search-bar" className="z-10 w-3/4 p-4 mx-auto bg-white rounded-md shadow-lg">
                    <form className="flex items-center justify-center space-x-2" onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Search here"
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                        />
                        <span className="text-gray-700">From</span>
                        <input
                            type="date"
                            className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            required
                        />
                        <span className="text-gray-700">to</span>
                        <input
                            type="date"
                            className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            required
                        />
                        <button type="submit"
                            className="bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                            Search
                        </button>
                    </form>
                </div>

                <h1 className='room text-4xl font-bold p-3'>Rooms, Suites, and Self-Catering Chalets</h1>
                <div className='w-full'>
                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((list, index) => (
                            <RoomsCard key={index} list={list} customerId={customerId} />
                        ))
                    ) : (
                        <div>No rooms available for the selected dates.</div>
                    )}
                </div>
            </section>
        </>
    );
}

export default AccommodationsPage;
