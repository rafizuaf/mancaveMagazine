// NavItem.tsx

import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
    href: string;
    children: ReactNode;
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, isActive }) => (
    <div className={`hover:border-b-2 hover:border-red-700 hover:-translate-y-1 ${isActive ? 'border-b-2 -translate-y-1 border-red-700' : ''} px-4 md:px-10 transition duration-300 ease-in-out`}>
        <Link href={href}>{children}</Link>
    </div>
);

export default NavItem;
