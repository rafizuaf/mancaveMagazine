'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Separator } from "./ui/separator";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="container">
            <div className="relative w-full h-[80px] md:h-full flex flex-row md:flex-col justify-between items-center px-4 text-gray-700 text-xl font-semibold border-b-2">
                <div className="flex md:-mt-5 flex-grow h-36 w-36 justify-center">
                    <img src='/Mancave-transparent.png' alt="logo" className="object-fit" />
                </div>

                <nav>
                    <div className="-mt-5 flex h-5 items-center space-x-4 text-md my-5">
                        <div className="hover:border-b hover:border-red-700 px-10 transition duration-300 ease-in-out"><Link href={'/'}>CARS</Link></div>
                        <Separator className="bg-black" orientation="vertical" />
                        <div className="hover:border-b hover:border-red-700 px-10 transition duration-300 ease-in-out"><Link href={'/'}>MOTORCYCLES</Link></div>
                        <Separator className="bg-black" orientation="vertical" />
                        <div className="hover:border-b hover:border-red-700 px-10 transition duration-300 ease-in-out"><Link href={'/'}>GEARS</Link></div>
                        <Separator className="bg-black" orientation="vertical" />
                        <div className="hover:border-b hover:border-red-700 px-10 transition duration-300 ease-in-out"><Link href={'/'}>MUSIC</Link></div>
                        <Separator className="bg-black" orientation="vertical" />
                        <div className="hover:border-b hover:border-red-700 px-10 transition duration-300 ease-in-out"><Link href={'/'}>GAMING</Link></div>
                    </div>
                </nav>

                {/* Hamburger menu */}
                <div onClick={handleClick} className={`md:hidden z-10 transform transition-opacity duration-300 ${nav ? 'opacity-70' : 'opacity-100'}`}>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul
                    className={`${!nav
                        ? 'hidden opacity-0 transition duration-300'
                        : 'absolute transition-opacity duration-300 opacity-70 bg-white top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-gray-900 transform translate-y-0'
                        } transition-opacity duration-300 ease-in-out`}
                >
                    <li className='py-2 text-2xl border-b border-red-700'>
                        <Link onClick={handleClick} href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='py-2 text-2xl border-b border-red-700'>
                        <Link onClick={handleClick} href='about'>
                            Cars
                        </Link>
                    </li>
                    <li className='py-2 text-2xl border-b border-red-700'>
                        <Link onClick={handleClick} href='skills'>
                            Motorcycles
                        </Link>
                    </li>
                    <li className='py-2 text-2xl border-b border-red-700'>
                        <Link onClick={handleClick} href='work'>
                            Gears
                        </Link>
                    </li>
                    <li className='py-2 text-2xl border-b border-red-700'>
                        <Link onClick={handleClick} href='contact'>
                            Music
                        </Link>
                    </li>
                    <li className='py-2 text-2xl border-b border-red-700'>
                        <Link onClick={handleClick} href='contact'>
                            Gaming
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
