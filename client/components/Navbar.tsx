'use client';

import * as React from "react";
import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";

interface NavItemProps {
    href: string;
    children: ReactNode;
    isActive: boolean;
}
const NavItem: React.FC<NavItemProps> = ({ href, children, isActive }) => (
    <div
        className={`hover:border-b-2 hover:border-red-700 hover:-translate-y-1 ${isActive ? 'border-b-2 -translate-y-1 border-red-700' : ''
            } px-4 md:px-10 transition duration-300 ease-in-out`}
    >
        <Link href={href}>{children}</Link>
    </div>
);

interface MobileNavItemProps extends NavItemProps {
    onClick: () => void;
}
const MobileNavItem: React.FC<MobileNavItemProps> = ({ onClick, href, children, isActive }) => (
    <li className={`${isActive ? 'border-b-2 border-red-700' : ''} px-4 my-4 transition duration-300 ease-in-out`}>
        <Link onClick={onClick} href={href}>{children}</Link>
    </li>
);

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);
    const [scrollBackground, setScrollBackground] = useState(false);
    const handleClick = () => setNav(!nav);
    const currentPath = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrollBackground(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { label: 'CARS', href: '/cars', isActive: currentPath === '/cars' },
        { label: 'MOTORCYCLES', href: '/motorcycles', isActive: currentPath === '/motorcycles' },
        { label: 'GEARS', href: '/gears', isActive: currentPath === '/gears' },
        { label: 'MUSIC', href: '/music', isActive: currentPath === '/music' },
        { label: 'GAMING', href: '/gaming', isActive: currentPath === '/gaming' },
    ];

    const mobileNavItems = [
        { label: 'HOME', href: '/', isActive: currentPath === '/' },
        { label: 'CARS', href: '/cars', isActive: currentPath === '/cars' },
        { label: 'MOTORCYCLES', href: '/motorcycles', isActive: currentPath === '/motorcycles' },
        { label: 'GEARS', href: '/gears', isActive: currentPath === '/gears' },
        { label: 'MUSIC', href: '/music', isActive: currentPath === '/music' },
        { label: 'GAMING', href: '/gaming', isActive: currentPath === '/gaming' },
    ];

    return (
        <header className={`container fixed top-0 left-0 right-0 ${scrollBackground ? 'bg-white opacity-95 transition duration-200 ease-in-out' : ''}`}>
            <div className={`relative w-full h-[80px] md:h-full flex flex-row md:flex-col justify-between items-center px-4 text-gray-700 text-xl font-semibold border-b-2`}>
                <div className="flex md:-mt-5 flex-grow h-36 w-36 justify-center">
                    <Link href={'/'}>
                        <img src='/Mancave-transparent.png' alt="logo" className="w-full h-full object-cover" />
                    </Link>
                </div>

                <nav className={`hidden md:flex md:items-center md:-mt-5 my-2`}>
                    <div className="flex items-center space-x-4 text-md">
                        {navItems.map((item, index) => (
                            <NavItem key={index} href={item.href} isActive={item.isActive}>{item.label}</NavItem>
                        ))}
                    </div>
                </nav>
                <div onClick={handleClick} className={`md:hidden z-10 transform transition-opacity duration-300 ${nav ? 'opacity-95' : 'opacity-100'}`}>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul
                    className={`${!nav
                        ? 'hidden md:hidden opacity-0 transition duration-300'
                        : 'absolute md:hidden transition-opacity duration-300 opacity-95 bg-white top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-gray-900 transform translate-y-0'
                        } transition-opacity duration-300 ease-in-out`}
                >
                    <SearchBar />
                    {mobileNavItems.map((item, index) => (
                        <MobileNavItem key={index} onClick={handleClick} href={item.href} isActive={item.isActive}>{item.label}</MobileNavItem>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
