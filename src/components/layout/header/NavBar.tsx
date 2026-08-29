"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import NavigationLinks from '../../navigation/NavigationLinks';
import SocialLinks from '../../navigation/SocialLinks';

type NavBarProps = {
    activeSection?: string;
    setActiveSection?: React.Dispatch<
        React.SetStateAction<string>
    >;
}

export default function NavBar({ activeSection, setActiveSection }: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <nav className="hidden md:flex items-center justify-center gap-6">
                <NavigationLinks
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    listClassName="flex gap-6 font-semibold"
                    linkClassName="hover:text-accent transition-colors duration-300"
                    activeLinkClassName="text-accent"
                />
                <span className="h-4 w-px bg-border" aria-hidden="true" />
                <SocialLinks className="flex items-center gap-4" />
            </nav>

            <nav className='relative md:hidden flex items-center'>
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
                   <div
                        id='mobile-navigation-menu'
                        className='absolute right-0 top-full mt-3 w-56 flex flex-col items-end gap-4 rounded-sm border border-border bg-bg/95 backdrop-blur-md p-4 shadow-sm'
                   >
                        <NavigationLinks
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            setIsMenuOpen={setIsMenuOpen}
                            listClassName="flex flex-col gap-2 font-semibold items-end"
                            linkClassName="hover:text-accent transition-colors duration-500"
                            activeLinkClassName="text-accent"
                        />
                        <span className="h-px w-full bg-border" aria-hidden="true" />
                        <SocialLinks className="flex items-center gap-4" />
                   </div>
                )}
            </nav>
        </>
    );
}
