'use client';

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
interface NavItemProps {
    href: string;
    children: React.ReactNode;
}

interface MobileNavItemProps extends NavItemProps {
    onClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ onClick, href, children }) => (
    <li className='py-2 text-2xl border-b border-red-700'>
        <Link onClick={onClick} href={href}>
            {children}
        </Link>
    </li>
);

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);

    const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setScrollBackground(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => setNav(!nav);

    const currentPath = usePathname()

    return (
        <div className={`container fixed top-0 left-0 right-0 ${scrollBackground ? 'bg-white opacity-80 transition duration-300 ease-in-out' : ''}`}>
            <div className="relative w-full h-[80px] md:h-full flex flex-row md:flex-col justify-between items-center px-4 text-gray-700 text-xl font-semibold border-b-2">
                <div className="flex md:-mt-5 flex-grow h-36 w-36 justify-center">
                    <img src='/Mancave-transparent.png' alt="logo" className="object-cover" />
                </div>

                <nav className="hidden md:flex md:items-center md:-mt-5 my-2">
                    <div className="flex items-center space-x-4 text-md">
                    <NavItem href={'/'} isActive={currentPath === '/'}>CARS</NavItem>
                    <NavItem href={'/motorcycles'} isActive={currentPath === '/motorcycles'}>MOTORCYCLES</NavItem>
                    <NavItem href={'/gears'} isActive={currentPath === '/gears'}>GEARS</NavItem>
                    <NavItem href={'/music'} isActive={currentPath === '/music'}>MUSIC</NavItem>
                    <NavItem href={'/gaming'} isActive={currentPath === '/gaming'}>GAMING</NavItem>
                    </div>
                </nav>
                <div onClick={handleClick} className={`md:hidden z-10 transform transition-opacity duration-300 ${nav ? 'opacity-70' : 'opacity-100'}`}>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul
                    className={`${!nav
                        ? 'hidden md:hidden opacity-0 transition duration-300'
                        : 'absolute md:hidden transition-opacity duration-300 opacity-70 bg-white top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-gray-900 transform translate-y-0'
                        } transition-opacity duration-300 ease-in-out`}
                >
                    <SearchBar />
                    <MobileNavItem onClick={handleClick} href='/'>Home</MobileNavItem>
                    <MobileNavItem onClick={handleClick} href='about'>Cars</MobileNavItem>
                    <MobileNavItem onClick={handleClick} href='skills'>Motorcycles</MobileNavItem>
                    <MobileNavItem onClick={handleClick} href='work'>Gears</MobileNavItem>
                    <MobileNavItem onClick={handleClick} href='contact'>Music</MobileNavItem>
                    <MobileNavItem onClick={handleClick} href='contact'>Gaming</MobileNavItem>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
