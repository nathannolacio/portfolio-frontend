"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import NavigationLinks from '../navigation/NavigationLinks';

type NavBarProps = {
    activeSection?: string;
    setActiveSection?: (section: string) => void;
}

export default function NavBar({ activeSection, setActiveSection }: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <nav className="hidden md:flex justify-center my-4">
                <NavigationLinks
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    listClassName="flex gap-6 font-semibold"
                    linkClassName="hover:text-lime-600 transition-colors duration-300"
                    activeLinkClassName="text-lime-600"
                />
            </nav>

            <nav className='md:hidden w-full flex flex-col items-end gap-4 my-4'>
                <button 
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls='mobile-navigation-menu'
                    className='hover:cursor-pointer'
                    onClick={() => setIsMenuOpen?.(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isMenuOpen && (
                   <div>
                        <NavigationLinks
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            setIsMenuOpen={setIsMenuOpen}
                            listClassName="flex flex-col gap-2 font-semibold"
                            linkClassName="hover:text-lime-600 transition-colors duration-500"
                            activeLinkClassName="text-lime-600"
                        />
                   </div>
                )}
            </nav>
        </>
    );
}