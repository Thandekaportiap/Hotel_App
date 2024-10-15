import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center  bg-[#003060] w-full">
            <nav className="flex justify-center flex-wrap gap-6 text-[#68bbe3] font-medium text-2xl">
                <a className="hover:text-gray-900" href="#">Home</a>
                <a className="hover:text-gray-900" href="#">About</a>
                <a className="hover:text-gray-900" href="#">Services</a>
                <a className="hover:text-gray-900" href="#">Media</a>
                <a className="hover:text-gray-900" href="#">Gallery</a>
                <a className="hover:text-gray-900" href="#">Contact</a>
            </nav>

            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                </a>
                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                </a>
            </div>

            <p className="text-center text-[#68bbe3] font-medium text-2xl">
                &copy; 2024 AWBookings.io - All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
