import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAccommodation } from '../features/Accommodation/AccommodationListAdminSlice';
import { toast } from 'react-toastify';

const EditAccommodation = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const accommodationList = useSelector((state) => state.accommodationListAdmin.accommodationList);
    const accommodation = accommodationList.find(item => item.id === id);
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        price: '',
        capacity: '',
        numberOfBeds: '',
        amenities: '',
        checkInTime: '',
        checkOutTime: '',
    });

    useEffect(() => {
        if (accommodation) {
            setFormData(accommodation);
        }
    }, [accommodation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateAccommodation({ id, data: formData }));
            toast.success('Accommodation updated successfully!');
            navigate('/manageaccommodations');
        } catch (error) {
            toast.error('Error updating accommodation: ' + error.message);
        }
    };

    if (!accommodation) {
        return <div>Accommodation not found.</div>;
    }

    return (
        <div className="max-w-xl mx-auto bg-[#86bbe3] p-6 rounded-lg shadow-md">
            <h2 className="font-sans text-3xl text-center font-bold mb-4 p-4">Edit Accommodation</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div className="mb-4" key={key}>
                        <label className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        {key === 'description' ? (
                            <textarea
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-[#003060] rounded-md p-2"
                            />
                        ) : (
                            <input
                                type={key === 'price' || key === 'capacity' || key === 'numberOfBeds' ? 'number' : 'text'}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-[#003060] rounded-md p-2"
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Update Accommodation
                </button>
            </form>
        </div>
    );
};

export default EditAccommodation;
