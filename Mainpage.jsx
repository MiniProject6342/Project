import React from 'react'
import './HomeHeader.css';
import { Link } from 'react-router-dom';
export default function Mainpage() {
  return (
    <div  className='nav2'>
       <Link to="/main">Home</Link>
       <Link to="/about">About Us</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/Login">Login</Link>
    </div>
  )
}