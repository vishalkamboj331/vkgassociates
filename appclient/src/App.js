import './App.css';
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './routs/navbar/Navbar';
import Home from './routs/home/Home';


import bootstrap from 'bootstrap'
import Services from './routs/Services/Services';
import Products from './routs/Products/Products';
import Admin from './routs/admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className='App gptbacgound' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='products' element={<Products/>} />
        <Route path='admin' element={<Admin/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
