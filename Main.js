import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Mainpage from './Mainpage';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Login from './Login';
import Home from './Home';
export default function Main() {
  return (
    <Router>
    <Mainpage></Mainpage>
    <Routes>
      <Route path="/main" element={<Mainpage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='./home' element={<Home/>}></Route>
    </Routes>
    {/* <Dashboard/> */}
  </Router>
  )
}
