import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAccommodation } from '../features/Accommodation/AccommodationListAdminSlice';

const ManageCard = ({ list }) => {
    const navigate = useNavigate();   
    const dispatch = useDispatch();              

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this accommodation?")) {
            dispatch(deleteAccommodation(id));
        }
    };

    const handleEdit = (id) => {
        navigate(`/editaccommodation/${id}`); // Navigate to an edit page
    };

    return (
        <div>
            <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                <div className="min-h-[256px]">
                    <img src={list.src} alt={list.label} className="w-full" />
                </div>

                <div className="p-6">
                    <h3 className="text-[#003060] text-2xl font-bold text-center">{list.label}</h3>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed"></p>
                    <div className='flex justify-center items-center'>
                        <button
                            type="button"
                            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 mx-3"
                            onClick={() => handleEdit(list.id)} // Pass the id for editing
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-red-600 hover:bg-red-700 active:bg-blue-600"
                            onClick={() => handleDelete(list.id)} 
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageCard;
