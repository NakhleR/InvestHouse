import React from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='flex bg-primary z-[10000] py-6 px-60 fixed top-0 left-0 w-full justify-center items-center flex-1'>
            <ul className='w-full list-none flex justify-between text-white '>
                {navLinks.map((nav, index) => (
                    index == 3 ? <li key={index} className='hover:text-green-500 transition duration-500 ease-in-out'>
                        <Link to={"rejoindre"} onClick={scrollTo(0, 0)}>{nav.title}</Link>
                    </li> : <li key={index} className='hover:text-green-500 transition duration-500 ease-in-out'>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar