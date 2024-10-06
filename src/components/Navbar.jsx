import React, { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <nav className='bg-primary z-[10000] py-6 px-6 fixed top-0 left-0 w-full flex justify-between items-center'>
            {/* Logo or Title */}
            <div className='text-white text-2xl font-bold'>Invest&apos;House</div>

            {/* Menu Icon for mobile */}
            <div className='md:hidden text-white text-3xl cursor-pointer' onClick={toggleDrawer}>
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>

            {/* Links for larger screens */}
            <ul className='hidden md:flex list-none justify-between text-white w-full px-60'>
                {navLinks.map((nav, index) => (
                    <li key={index} className='hover:text-green-500 transition duration-500 ease-in-out'>
                        {index === 3 ? (
                            <Link to={"rejoindre"} onClick={() => { window.scrollTo(0, 0); handleLinkClick(); }}>{nav.title}</Link>
                        ) : (
                            <a href={`#${nav.id}`} onClick={handleLinkClick}>{nav.title}</a>
                        )}
                    </li>
                ))}
            </ul>

            {/* Drawer for mobile */}
            <div className={`md:hidden fixed top-0 left-0 h-full w-4/5 bg-primary z-[1000] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <ul className='list-none flex flex-col items-start justify-start text-white p-8 space-y-6'>
                    {navLinks.map((nav, index) => (
                        <li key={index} className='hover:text-green-500 transition duration-500 ease-in-out text-2xl'>
                            {index === 3 ? (
                                <Link to={"rejoindre"} onClick={() => { window.scrollTo(0, 0); handleLinkClick(); }}>{nav.title}</Link>
                            ) : (
                                <a href={`#${nav.id}`} onClick={handleLinkClick}>{nav.title}</a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
