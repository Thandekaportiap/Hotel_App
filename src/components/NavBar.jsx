import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai"; 
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ id, onLogout, role }) => {
    const [openNav, setOpenNav] = useState(true);
    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
    const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
    const loginDropdownRef = useRef(null);
    const registerDropdownRef = useRef(null);

    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    const handleClickOutside = (event) => {
        if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
            setLoginDropdownOpen(false);
        }
        if (registerDropdownRef.current && !registerDropdownRef.current.contains(event.target)) {
            setRegisterDropdownOpen(false);
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
            <nav className='z-50 border bg-[#003060] font-serif flex justify-between items-center h-20 mx-auto px-5 text-[#A3E3FA]'>
                <h1 className="font-sans text-4xl">AWBookings.io</h1>

                <ul className='hidden space-x-6 text-2xl font-semibold md:flex'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'hover:text-[#68bbe3]')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/accommodations" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'hover:text-[#68bbe3]')}>Accommodations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'hover:text-[#68bbe3]')}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'hover:text-[#68bbe3]')}>Contact Us</NavLink>
                    </li>
                </ul>

                <div className='hidden space-x-4 md:flex'>
                    {id ? (
                        <>
                            <Link to={role === "Admin" ? "/adminProfile" : "/userProfile"}>
                                <button className="flex items-center space-x-2 border border-[#68bbe3] text-[#68bbe3] py-2 hover:bg-[#68bbe3] hover:text-white px-4 font-bold rounded-md">
                                    <AiOutlineUser />
                                    <span>Profile</span>
                                </button>
                            </Link>
                            <button onClick={onLogout} className="bg-[#68bbe3] px-4 py-2 rounded text-[black]">Logout</button>
                        </>
                    ) : (
                        <>
                            <div className='relative' ref={loginDropdownRef}>
                                <button 
                                    onClick={() => setLoginDropdownOpen(!loginDropdownOpen)} 
                                    className='border border-[#68bbe3] text-[#68bbe3] py-2 hover:bg-[#68bbe3] hover:text-white px-4 font-bold rounded-md'>
                                    Login
                                </button>
                                {loginDropdownOpen && (
                                    <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-md z-10'>
                                        <Link to="/login/customer">
                                            <button className='block px-4 py-2 text-[#003060] hover:bg-[#68bbe3] hover:text-white w-full text-left'>Login as Customer</button>
                                        </Link>
                                        <Link to="/login/admin">
                                            <button className='block px-4 py-2 text-[#003060] hover:bg-[#68bbe3] hover:text-white w-full text-left'>Login as Admin</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className='relative' ref={registerDropdownRef}>
                                <button 
                                    onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)} 
                                    className='border border-[#68bbe3] text-[#68bbe3] py-2 hover:bg-[#68bbe3] hover:text-white px-4 font-bold rounded-md'>
                                    Register
                                </button>
                                {registerDropdownOpen && (
                                    <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-md z-10'>
                                        <Link to="/register/customer">
                                            <button className='block px-4 py-2 text-[#003060] hover:bg-[#68bbe3] hover:text-white w-full text-left'>Register as Customer</button>
                                        </Link>
                                        <Link to="/register/admin">
                                            <button className='block px-4 py-2 text-[#003060] hover:bg-[#68bbe3] hover:text-white w-full text-left'>Register as Admin</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div className='fixed md:hidden right-6' onClick={ToggleNavBar}>
                    {!openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <div className={!openNav ? 'fixed left-0 top-0 w-[60%] bg-[#003060] h-full block pl-4 pt-4 z-50 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    <h1 className='text-[27px] font-bold text-white'>AWBookings.io</h1>
                    <ul className='block pt-8 space-y-4'>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'text-white')}>Home</NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/accommodations" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'text-white')}>Accommodations</NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'text-white')}>About Us</NavLink>
                        </li>
                        <li className='border-b border-[#68bbe3]'>
                            <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'text-[#68bbe3]' : 'text-white')}>Contact Us</NavLink>
                        </li>
                    </ul>
                    {id ? (
                        <button onClick={onLogout} className="px-4 py-2 bg-red-500 rounded">Logout</button>
                    ) : (
                        <div className='block pt-5 space-y-4'>
                            <Link to="/login/customer">
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-[#003060] w-full py-2 text-[white] font-bold rounded-md block'>
                                    Login as Customer
                                </button>
                            </Link>
                            <Link to="/login/admin">
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-[#003060] w-full py-2 text-[white] font-bold rounded-md block'>
                                    Login as Admin
                                </button>
                            </Link>
                            <Link to="/register/customer">
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-[#003060] w-full py-2 text-[white] font-bold rounded-md block'>
                                    Register as Customer
                                </button>
                            </Link>
                            <Link to="/register/admin">
                                <button className='border border-[#68bbe3] hover:bg-[#68bbe3] hover:text-white bg-[#003060] w-full py-2 text-[white] font-bold rounded-md block'>
                                    Register as Admin
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
