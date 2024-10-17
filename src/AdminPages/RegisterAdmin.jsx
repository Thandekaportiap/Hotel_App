import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAdmin } from '../features/Register/RegisterAdminSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const RegisterAdmin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [company, setCompany] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resultAction = await dispatch(registerAdmin({
                username,
                email,
                password,
                firstName,
                lastName,
                mobile,
                profilePicture,
                company,  
            }));

            if (registerAdmin.fulfilled.match(resultAction)) {
                navigate('/adminProfile');
                toast.success('Admin created successfully', { position: "top-center" });
            } else {
                toast.error('Admin creation failed: ' + resultAction.payload, { position: "top-center" });
            }
        } catch (error) {
            toast.error('Error: ' + error.message, { position: "top-center" });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file);
        }
    };

    return (
        <div className="font-[sans-serif]">
            <div className="text-center bg-gradient-to-r from-[#003060] to-[#68BBE3] min-h-[160px] sm:p-6 p-4">
                <h4 className="sm:text-3xl text-2xl font-bold text-white">Create your new account</h4>
            </div>

            <div className="mx-4 mb-4 -mt-16">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-8 p-4 rounded-md">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Company Name</label>
                            <input 
                                type="text" 
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter company name" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Username</label>
                            <input 
                                type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter username" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
                            <input 
                                type="text" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter first name" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
                            <input 
                                type="text" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter last name" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter email" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                            <input 
                                type="tel" 
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter mobile number" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                                placeholder="Enter password" 
                            />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Profile Picture</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleFileChange}
                                className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-blue-500 transition-all" 
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-[#003060] hover:bg-blue-600 focus:outline-none">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterAdmin;
