import React, { useState } from 'react'; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import { Link, NavLink } from 'react-router-dom';

const Logo = require('../assets/Logo.png');

const Navbar = ({ id, onLogout }) => {
    const [openNav, setOpenNav] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const [role, setRole] = useState("Customer"); // Default role

    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
        setShowDropdown(false); // Hide dropdown after selection
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className='border bg-[#003060] flex justify-between items-center h-20 mx-auto px-5 text-[#68bbe3]'>
                <img src={Logo} alt="Logo" className='h-12 w-16' />
                
                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex space-x-6 text-xl font-semibold'>
                    <li>
                        <NavLink to="/" 
                            className={({ isActive }) => (isActive ? 'text-[#68bbe3] active:bg-[#003060]' : 'hover:text-[#68bbe3]')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shoppingList" 
                            className={({ isActive }) => (isActive ? 'text-[#68bbe3] active:bg-[#003060]' : 'hover:text-[#68bbe3]')}
                        >
                            Accommodations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                            className={({ isActive }) => (isActive ? 'text-[#68bbe3] active:bg-[#003060]' : 'hover:text-[#68bbe3]')}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" 
                            className={({ isActive }) => (isActive ? 'text-[#68bbe3] active:bg-[#003060]' : 'hover:text-[#68bbe3]')}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                
                {/* Desktop Buttons */}
                {id ? (
                    <div className='hidden space-x-4 md:flex'>
                        <button onClick={onLogout} className="bg-[#68bbe3] px-4 py-2 rounded text-[black]">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className='hidden space-x-4 md:flex'>
                        <div className="relative">
                            <button onClick={toggleDropdown} className='border border-[#68bbe3] text-[#68bbe3] py-2 px-4 font-bold rounded-md'>
                                 Login
                            </button>
                            {showDropdown && (
                                <div className="absolute right-0 bg-white border border-[#68bbe3] mt-2 rounded-md shadow-lg z-10">
                                    <button onClick={() => handleRoleSelect("Customer")} className='block px-4 py-2 hover:bg-[#68bbe3] hover:text-white w-full text-left'>
                                        Customer
                                    </button>
                                    <button onClick={() => handleRoleSelect("Admin")} className='block px-4 py-2 hover:bg-[#68bbe3] hover:text-white w-full text-left'>
                                        Admin
                                    </button>
                                </div>
                            )}
                        </div>
                        <Link to={"/Register"}>
                            <button className='border border-[#68bbe3] text-[#68bbe3] px-4 py-2 hover:bg-[#68bbe3] hover:text-white font-bold rounded-md'>
                                Register
                            </button>
                        </Link>
                    </div>
                )}
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='fixed md:hidden right-6' onClick={ToggleNavBar}>
                    {!openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-[black] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    <h1 className='text-[27px] font-bold'>Accommodations</h1>  
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block pt-8 space-y-4'>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/" 
                                className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/shoppingList" 
                                className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}
                            >
                                Accommodations
                            </NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/about" 
                                className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/contact" 
                                className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    {id ? (
                        <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">
                            Logout
                        </button>
                    ) : (
                        <div className='block pt-5 space-y-4'>
                            <Link to={'/Login'}>
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md block'>
                                    Login
                                </button>
                            </Link>
                            <Link to={"/Register"}>
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md'>
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
