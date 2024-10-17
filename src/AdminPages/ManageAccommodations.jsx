import React, { useEffect } from 'react';
import ManageCard from '../components/ManageCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodationList } from '../features/Accommodation/AccommodationListSlice';

const ManageAccommodations = ({ userId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { accommodationList, loading, error } = useSelector((state) => state.accommodations);

    useEffect(() => {
        if (userId) {
            dispatch(fetchAccommodationList(userId)); // Pass userId here
        }
    }, [dispatch, userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const addNewAccommodation = () => {
        navigate('/addaccommodation');
    };

    console.log(accommodationList); // Check the fetched data

    return (
        <section>
            <h1 className="text-center text-4xl font-bold p-8">Manage Accommodations</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
                {accommodationList.length > 0 ? (
                    accommodationList.map((item) => (
                        <ManageCard key={item.id} list={{ src: item.imageUrl, label: item.name }} />
                    ))
                ) : (
                    <div>No accommodations found.</div>
                )}
            </div>

            <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600' onClick={addNewAccommodation}>
                Add New Accommodation
            </button>
        </section>
    );
};

export default ManageAccommodations;
