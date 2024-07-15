import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1">

            <h1 className='text-3xl font-bold primary-color ml-4'>IlhamArdhanmas</h1>
            <ul className='hidden md:flex'>
                <li className='p-2'><a href="#home">Home</a></li>
                <li className='p-2'><a href="#about">About</a></li>
                <li className='p-2'><a href="#project">Project</a></li>
                <li className='p-2'><a href="#certificate">Certificate</a></li>
                <li className='p-2'><a href="#contact">Contact</a></li>
            </ul>

            <div className='block md:hidden' onClick={handleNavToggle}>
                {navOpen ? <AiOutlineClose size={20} className="fixed right-4 top-4" /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={navOpen ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500 z-40' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>IlhamArdhanmas</h1>
                <ul className='p-8 text-2x1'>
                    <li className='p-2'><a href="#home">Home</a></li>
                    <li className='p-2'><a href="#about">About</a></li>
                    <li className='p-2'><a href="#project">Project</a></li>
                    <li className='p-2'><a href="#certificate">Certificate</a></li>
                    <li className='p-2'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
