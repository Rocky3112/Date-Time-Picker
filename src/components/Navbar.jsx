import React, { useState } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import logo from '../images/vector1.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-xl fixed z-10 w-full ">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="lg:text-3xl text-gray-500 font-bold uppercase">
                        <img src={logo} alt="" className='h-8' />
                        </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <h2 className="text-lg">Features</h2>
                        <h2 className="text-lg">Mission Statement</h2>
                        <h2 className="text-lg">About</h2>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-3xl border border-gray-400 hover:bg-gray-400 hover:text-white">
                            <MdOutlineTravelExplore className="text-green-500" />
                            <span>Explore</span>
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <MdOutlineMessage className="h-7 w-7" />
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="h-10 rounded-full" />
                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex flex-col items-center">
                        <h2 className="text-lg">Features</h2>
                        <h2 className="text-lg">Mission Statement</h2>
                        <h2 className="text-lg">About</h2>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-3xl border border-gray-400 hover:bg-gray-400 hover:text-white">
                            <MdOutlineTravelExplore className="text-green-500" />
                            <span>Explore</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
