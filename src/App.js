import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Home/Banner';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        {/* <Route path='/user' element={}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
