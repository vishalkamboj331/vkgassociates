import React from 'react';
import logo from '../../../src/logo.png';
import "./navbar.css"
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className='container'>
      <img id='logNav' src={logo} alt="" />
        <nav>
            <ul>
              <li><Link className='litems' to="/">Home</Link></li>
              <li><Link className='litems' to="/services">Services</Link></li>
              <li><Link className='litems' to="/products">Products</Link></li>
              <li><Link className='litems' to="/admin">Admin</Link></li>
            </ul>
        </nav>
    </div>
  )
}
console.log("hello")

export default Navbar