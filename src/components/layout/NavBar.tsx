"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/", section: "home" },
        { label: "About", href: "#about", section: "about" },
        { label: "Projects", href: "#projects", section: "projects" },
        { label: "Contact", href: "#contact", section: "contact" }
    ]

    const renderNavItems = () => {
        return navItems.map(item => (
            <li key={item.href}>
                <Link 
                    href={item.href}
                    className={activeSection === item.section ? 
                        "text-lime-600" : 
                        "hover:text-lime-600 transition-colors duration-500"}
                    onClick={() => {
                        setActiveSection(item.section);
                        setIsMenuOpen(false);
                    }}
                >
                    {item.label}
                </Link>
            </li>
        ));
    }

    return(
        <>
            <nav className="hidden md:flex justify-center gap-8 font-medium my-4">
                <ul className='flex gap-6 font-semibold'>
                    {renderNavItems()}
                </ul>

            </nav>
            <nav className='md:hidden w-full flex flex-col my-4 items-end gap-4'>
                <button 
                    className='hover:cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                {isMenuOpen && (
                    <ul className='flex flex-col gap-2 font-semibold'>
                        {renderNavItems()}
                    </ul>
                )}
            </nav>
        </>
    );
}