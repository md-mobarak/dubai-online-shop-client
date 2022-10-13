import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>dashboard</h1>
            <li>
                <NavLink to='/dashboard/addProduct'>Add Product</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/manageProduct'>Manage Product</NavLink>
            </li>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;