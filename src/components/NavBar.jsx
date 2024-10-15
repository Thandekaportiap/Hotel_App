import React, { useState, useEffect, useRef } from 'react'; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import { Link, NavLink } from 'react-router-dom';

const Logo = require('../assets/Logo.png');

const Navbar = ({ id, onLogout }) => {
    const [openNav, setOpenNav] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); 

    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                        <NavLink to="/accommodations" 
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
                        <NavLink to="/contactus" 
                            className={({ isActive }) => (isActive ? 'text-[#68bbe3] active:bg-[#003060]' : 'hover:text-[#68bbe3]')}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className='hidden space-x-4 md:flex'>
                    {id ? (
                        <button onClick={onLogout} className="bg-[#68bbe3] px-4 py-2 rounded text-[black]">
                            Logout
                        </button>
                    ) : (
                        <>
                            <div className='relative' ref={dropdownRef}>
                                <button className='border border-[#68bbe3] text-[#68bbe3] py-2 hover:bg-[#68bbe3] hover:text-white px-4 font-bold rounded-md' onClick={toggleDropdown}>
                                    Login
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                                        <Link to="/login/customer">
                                            <button className='w-full text-left px-4 py-2 hover:bg-[#68bbe3] hover:text-white' onClick={() => setDropdownOpen(false)}>
                                                LogIn as Customer
                                            </button>
                                        </Link>
                                        <Link to="/login/admin">
                                            <button className='w-full text-left px-4 py-2 hover:bg-[#68bbe3] hover:text-white' onClick={() => setDropdownOpen(false)}>
                                                LogIn as Admin
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className='relative' ref={dropdownRef}>
                                <button className='border border-[#68bbe3] text-[#68bbe3] py-2 hover:bg-[#68bbe3] hover:text-white px-4 font-bold rounded-md' onClick={toggleDropdown}>
                                    Register
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                                        <Link to="/register/customer">
                                            <button className='w-full text-left px-4 py-2 hover:bg-[#68bbe3] hover:text-white' onClick={() => setDropdownOpen(false)}>
                                                Register as Customer
                                            </button>
                                        </Link>
                                        <Link to="/register/admin">
                                            <button className='w-full text-left px-4 py-2 hover:bg-[#68bbe3] hover:text-white' onClick={() => setDropdownOpen(false)}>
                                                Register as Admin
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className='fixed md:hidden right-6' onClick={ToggleNavBar}>
                    {!openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-0 fixed top-0 w-[60%] bg-black h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    <h1 className='text-[27px] font-bold'>Accommodations</h1>
                    <ul className='block pt-8 space-y-4'>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}>Home</NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/shoppingList" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}>Accommodations</NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}>About Us</NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : '')}>Contact Us</NavLink>
                        </li>
                    </ul>
                    {id ? (
                        <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
                    ) : (
                        <div className='block pt-5 space-y-4'>
                            <Link to='/Login'>
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md block'>Login</button>
                            </Link>
                            <Link to="/Register">
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-violet-200 w-full py-2 text-[black] font-bold rounded-md'>Register</button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
