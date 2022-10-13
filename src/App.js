import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/Card/ProductDetails';
import AddProduct from './components/Dashboard/AddProduct';
import Dashboard from './components/Dashboard/Dashboard';
import ManageProduct from './components/Dashboard/ManageProduct';
import Footer from './components/Footer/Footer';
import Banner from './components/Home/Banner';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

import Navbar from './components/Navbar/Navbar';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Whatsapp from './components/Whatsapp/Whatsapp';



function App() {
  const pathName = useLocation()

  return (
    <div>
      <Navbar></Navbar>

      {/* <marquee behavior="" direction=""></marquee> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/product/:id' element={<RequireAuth>
          <ProductDetails></ProductDetails>
        </RequireAuth>}></Route>
        {/* nasted Route  */}
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
      </Routes>
      {
        pathName === '/login' | '/signup' ? '' : <Footer></Footer>
      }

      <div className='fixed lg:right-10 right-8 bottom-12'>
        {
          pathName.pathname === '/dashboard' ? '' : <Whatsapp></Whatsapp>
        }
      </div>
    </div>
  );
}

export default App;
