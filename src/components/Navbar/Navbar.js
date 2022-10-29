import React from 'react';
import './Navbar.css'
import { BsFillCartFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../useHook/useAdmin';


const Navbar = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);

    const [admin] = useAdmin(user)
    // console.log(admin.admin);
    // if (admin === true) {
    //     return console.log('I am admin');
    // }

    const logout = () => {
        signOut(auth);
        navigate('/login')
        localStorage.removeItem('accessToken')
    };
    if (loading) {
        return <h1 className='text-center mt-20 font-bold text-4xl'>Loading...</h1>
    }
    return (
        <div className="navbar bg-green-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/contact'>CONTACT US</Link></li>
                        <li><Link to='about'>ABOUT US</Link></li>

                        {
                            admin?.admin === true ? <li>
                                <Link to='/dashboard'>DASHBOARD</Link>
                            </li> : ''

                        }

                    </ul>
                </div>
                <Link to='/' className="text-white normal-case text-2xl lg:mx-10">VAPELAND</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-white font-semibold'><Link to='/contact'>CONTACT US</Link></li>

                    <li className='text-white font-semibold'><Link to='about'>ABOUT US</Link></li>

                    {
                        user && admin?.admin === true ? <li className='text-white font-semibold'>
                            <Link to='/dashboard'>DASHBOARD</Link>
                        </li> : ''
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <span className='flex justify-evenly items-center md:lg:mr-6'>
                    <Link to='/cart' >
                        <BsFillCartFill className='text-white lg:text-xl text-lg mx-3'></BsFillCartFill>
                    </Link>

                    {
                        user ?
                            <button onClick={logout}>
                                <FaUserAlt className='text-white lg:text-xl text-lg'></FaUserAlt>
                            </button> :
                            <Link className='text-white lg:text-xl font-semibold' to='/login'>
                                Login
                            </Link>
                    }

                </span>
            </div>
        </div>
    );
};

export default Navbar;