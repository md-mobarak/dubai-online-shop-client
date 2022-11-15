import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';



const Dashboard = () => {
    const pathName = useLocation()
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>VAPELAND DASHBOARD</title>
                <link rel="canonical" href="http://mysite.com/dashboard" />
                <meta name="description" content="VAPELAND DASHBOARD " />
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <div className=' px-2'>
                        <div>
                            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className='sm:md:-32'>
                            <h1 className='lg:text-4xl text-xl text-center lg:mt-0 lg:mb-0 mb-3 mt-[-20px] lg:font-bold font-semibold uppercase'>dashboard</h1>
                        </div>
                    </div>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-green-400 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to='/dashboard' className={`${pathName.pathname === '/dashboard' ? 'lg:text-2xl text-xl  text-yellow-200' : ' lg:text-2xl text-xl text-white'}`}>All User</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addProduct' className={`${pathName.pathname === '/dashboard/addProduct' ? 'lg:text-2xl text-xl  text-yellow-200' : ' lg:text-2xl text-xl text-white'}`}>Add Product</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/manageProduct' className={`${pathName.pathname === '/dashboard/manageProduct' ? 'lg:text-2xl text-xl  text-yellow-200' : ' lg:text-2xl text-xl text-white'}`}>Manage Product</Link>
                        </li>
                    </ul>

                </div>
            </div>



        </div>
    );
};

export default Dashboard;