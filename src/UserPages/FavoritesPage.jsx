import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../features/Favorites/FavoritesSlice'; // Import your slice to fetch favorites
import RoomsCard from '../components/RoomsCard';

const FavoritesPage = ({ customerId }) => {
    console.log(customerId)
    const dispatch = useDispatch();
    const { favorites, loading, error } = useSelector((state) => state.favorites);

    useEffect(() => {
        if (customerId) {
            dispatch(fetchFavorites(customerId));
        }
    }, [customerId, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    console.log(favorites)
    return (
        <section>
            <h1 className='text-4xl font-bold p-3'>Your Favorites</h1>
            <div className='w-full'>
                {favorites.map((favorite, index) => (
                    <RoomsCard key={index} list={favorite} />
                ))}
            </div>
        </section>
    );
};

export default FavoritesPage;
