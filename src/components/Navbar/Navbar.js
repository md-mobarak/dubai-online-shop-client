import React from 'react';
import './Navbar.css'
import { BsFillCartFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-color">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>CONTACT US</a></li>
                        <li><a>ABOUT US</a></li>
                    </ul>
                </div>
                <Link to='/' className="text-white normal-case text-2xl lg:mx-10">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-white font-semibold'><a>CONTACT US</a></li>

                    <li className='text-white font-semibold'><a>ABOUT US</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <span className='flex justify-evenly items-center md:lg:mr-6'>
                    <Link to='/cart' >
                        <BsFillCartFill className='text-white lg:text-xl text-lg mx-3'></BsFillCartFill>
                    </Link>

                    <Link to='/login'>
                        <FaUserAlt className='text-white lg:text-xl text-lg'></FaUserAlt>
                    </Link>

                </span>
            </div>
        </div>
    );
};

export default Navbar;