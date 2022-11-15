import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/Card/ProductDetails';
import AddProduct from './components/Dashboard/AddProduct';
import AllUser from './components/Dashboard/AllUser';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditDetail from './components/Dashboard/EditDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { signOut } from 'firebase/auth';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Card from './components/Card/Card';
import Card2 from './components/Card/Card2';


function App() {
  const pathName = useLocation()
  // const navigate = useNavigate()
  // const [user, loading] = useAuthState(auth)
  // const path = pathName.pathname === '/dashboard' || '/dashboard/addProduct' || '/dashboard/manageProduct'
  // if (!user && path) {
  //   signOut(auth);
  //   navigate('/')
  // }
  // if (loading) {
  //   return <h1 className='text-center my-20 text-4xl font-bold'>Loading...</h1>
  // }
  return (
    <div>
      <Navbar></Navbar>

      {/* <marquee behavior="" direction=""></marquee> */}
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/loadmore' element={<Card></Card>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/product/:id' element={<RequireAuth>
          <ProductDetails></ProductDetails>
        </RequireAuth>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>

        {/* nasted Route  */}
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard' element={<AllUser></AllUser>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='editDetails/:id' element={<EditDetail></EditDetail>}></Route>
        </Route>
      </Routes>
      {pathName.pathname === '/about' ? '' : <Footer></Footer>}

      <div className='fixed lg:right-10 right-8 bottom-12'>
        {
          pathName.pathname === '/dashboard' ? '' : <Whatsapp></Whatsapp>
        }
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
