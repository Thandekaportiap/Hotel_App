import React, { useState, useEffect } from 'react';
import { db } from '../components/Firebase'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');


    useEffect(() => {
        const fetchReviews = async () => {
            const reviewsCollection = collection(db, 'reviews'); // 'reviews' is the name of the Firestore collection
            const reviewsSnapshot = await getDocs(reviewsCollection);
            const reviewsList = reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(reviewsList);
        };

        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'reviews'), {
                name,
                rating,
                comment,
                createdAt: new Date(),
            });

            // Reset form
            setName('');
            setRating(1);
            setComment('');
        } catch (error) {
            console.error("Error adding review: ", error);
        }
    };

    return (
        <div className="review-page">
            <h1 className="text-2xl font-bold">Rate Your Accommodation</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label>Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="border p-2 w-full"
                    >
                        {[1, 2, 3, 4, 5].map((rate) => (
                            <option key={rate} value={rate}>{rate}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label>Comment:</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Review</button>
            </form>

            <h2 className="mt-8 text-xl font-bold">Existing Reviews:</h2>
            <ul className="mt-4">
                {reviews.map((review) => (
                    <li key={review.id} className="border p-4 mb-2">
                        <h3 className="font-bold">{review.name} (Rating: {review.rating})</h3>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewPage;
