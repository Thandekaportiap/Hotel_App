import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites, removeFavorite } from '../features/Favorites/FavoritesSlice'; // Import the removeFavorite action
import RoomsCard from '../components/RoomsCard';

const FavoritesPage = ({ customerId }) => {
    const dispatch = useDispatch();
    const { favorites, loading, error } = useSelector((state) => state.favorites);

    useEffect(() => {
        if (customerId) {
            dispatch(fetchFavorites(customerId));
        }
    }, [customerId, dispatch]);

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <h1 className='text-4xl font-bold p-3'>Your Favorites</h1>
            <div className='w-full'>
                {favorites.map((favorite) => (
                    <div key={favorite.id} className="flex justify-between items-center">
                        <RoomsCard list={favorite.roomDetails} />
                        <button
                            onClick={() => handleRemoveFavorite(favorite.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FavoritesPage;
