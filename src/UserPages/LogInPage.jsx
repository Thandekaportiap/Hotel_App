import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/Firebase';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/Login/LoginSlice';

const LogImg = require('../assets/bedroom.jpg');

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            dispatch(setUser({ email: user.email, uid: user.uid }));

            console.log("User logged in");
            navigate("/userprofile");
            toast.success('User logged in successfully', {
                position: "top-center",
            });
        } catch (error) {
            console.log(error);
            toast.error('Login failed: ' + error.message);
        }
    };

    return (
        <div className="font-[sans-serif] max-w-7xl mx-auto h-screen">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                <form className="max-w-lg max-md:mx-auto w-full p-6" onSubmit={handleSubmit}>
                    <div className="mb-12">
                        <h3 className="text-[#055c9d] text-4xl font-extrabold">Sign in</h3>
                        <p className="text-[#055c9d] text-sm mt-6">Effortlessly access your account.</p>
                    </div>

                    <div>
                        <label className="text-[#055c9d] text-[15px] mb-2 block">Email</label>
                        <div className="relative flex items-center">
                            <input 
                                name="email" 
                                type="email" 
                                required 
                                className="w-full text-sm text-[#055c9d] bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-[#003060]" 
                                placeholder="Enter email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
                                <path d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" />
                                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-[#055c9d] text-[15px] mb-2 block">Password</label>
                        <div className="relative flex items-center">
                            <input 
                                name="password" 
                                type="password" 
                                required 
                                className="w-full text-sm text-[#055c9d] bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-[#003060]" 
                                placeholder="Enter password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
                        <div className="flex items-center">
                            <input 
                                id="remember-me" 
                                name="remember-me" 
                                type="checkbox" 
                                className="shrink-0 h-4 w-4 text-[#003060] focus:ring-blue-500 border-gray-300 rounded-md" 
                            />
                            <label htmlFor="remember-me" className="ml-3 block text-sm text-[#055c9d]">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <Link to="/forgot-password" className="text-[#003060] font-semibold hover:underline">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="w-full shadow-xl py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-[#003060] hover:bg-blue-700 focus:outline-none">
                            Log in
                        </button>
                    </div>
                    <p className="text-sm mt-8 text-center text-[#055c9d]">Don't have an account? <Link to="/register/customer" className="text-[#003060] font-semibold tracking-wide hover:underline ml-1">Register here</Link></p>
                </form>

                <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#68BBE3] before:to-[#0E86D4] before:h-full before:w-3/4 before:right-0 before:z-0">
                    <img src={LogImg} className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative" alt="Bedroom" />
                </div>
            </div>
        </div>
    );
}

export default LogInPage;
