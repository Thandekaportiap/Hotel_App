import React, { useEffect } from 'react';
import ManageCard from '../components/ManageCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodationList } from '../features/Accommodation/AccommodationListAdminSlice';

const ManageAccommodations = ({ userId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { accommodationList, loading, error } = useSelector((state) => state.accommodationListAdmin);

    useEffect(() => {
        if (userId) {
            dispatch(fetchAccommodationList(userId)); 
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

    return (
        <section className='bg-[#68bbe3] p-4'>
            <h1 className="text-center text-4xl font-bold p-8">Manage Accommodations</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
                {accommodationList.length > 0 ? (
                    accommodationList.map((item) => (
                        <ManageCard key={item.id} list={{ src: item.imageUrl, label: item.name, id: item.id, price: item.price, location: item.location }} />
                    ))
                ) : (
                    <div>No accommodations found.</div>
                )}
            </div>

            <div className='flex justify-center mt-4'>
                <button className='bg-[#003060] text-white rounded-md px-4 py-2 hover:bg-blue-600' onClick={addNewAccommodation}>
                    Add New Accommodation
                </button>
            </div>
        </section>
    );
};

export default ManageAccommodations;
