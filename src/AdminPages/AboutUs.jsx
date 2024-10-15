import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#003060]">
            <h1 className="text-4xl font-bold mb-6">About AWBookings</h1>
            <p className="max-w-xl text-lg text-center mb-4">
                Welcome to AWBookings, your premier accommodation booking app! We aim to simplify the process of finding and reserving accommodations that meet your needs. 
                Whether you’re traveling for business or pleasure, we provide a wide range of options, from cozy hotels to luxurious stays, tailored just for you.
            </p>
            <p className="max-w-xl text-lg text-center mb-6">
                Our mission is to make booking accommodations as seamless and enjoyable as possible, providing you with a user-friendly platform to explore and reserve your perfect stay.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#68bbe3] hover:text-[#003060]">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#68bbe3] hover:text-[#003060]">
                    <FaTwitter size={30} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#68bbe3] hover:text-[#003060]">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#68bbe3] hover:text-[#003060]">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
};

export default AboutUs;
