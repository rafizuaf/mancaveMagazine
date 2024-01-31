'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="relative w-full h-[80px] flex justify-between items-center px-4 text-gray-700 text-xl font-semibold border-b-2">
            <div className="flex flex-grow h-36 object-cover justify-center">
                <img src='/Mancave-transparent.png' alt="logo" className="object-fit" />
            </div>

            {/* Hamburger menu */}
            <div onClick={handleClick} className={`md:hidden z-10 transform transition-opacity duration-300 ${nav ? 'opacity-70' : 'opacity-100'}`}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul
                className={`${
                    !nav
                        ? 'hidden opacity-0 transition duration-300'
                        : 'absolute transition-opacity duration-300 opacity-70 bg-white top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-gray-700 transform translate-y-0'
                } transition-opacity duration-300 ease-in-out`}
            >
                <li className='py-2 text-2xl border-b border-red-700'>
                    <Link onClick={handleClick} href='home'>
                        Home
                    </Link>
                </li>
                <li className='py-2 text-2xl border-b border-red-700'>
                    <Link onClick={handleClick} href='about'>
                        About
                    </Link>
                </li>
                <li className='py-2 text-2xl border-b border-red-700'>
                    <Link onClick={handleClick} href='skills'>
                        Skills
                    </Link>
                </li>
                <li className='py-2 text-2xl border-b border-red-700'>
                    <Link onClick={handleClick} href='work'>
                        Work
                    </Link>
                </li>
                <li className='py-2 text-2xl border-b border-red-700'>
                    <Link onClick={handleClick} href='contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}
