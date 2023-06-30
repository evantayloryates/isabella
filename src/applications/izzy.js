import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  Home
} from '../pages';


const Izzy = () => {

  return (
    <div className="content-root">
      <Router>
        <ul className="nav-menu">
          <li>
            <Link to="/pics">Pics?</Link></li>
          <li>
            <Link to="/buraco">Buraco</Link></li>
          <li>
            <Link to="/happy-birthday">Happy Birthday</Link></li>
          <li>
            <Link to="/upcoming">Upcoming</Link></li>
          <li>
            <Link to="/acting">Acting</Link></li>
          <li>
            <Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/about">About</Link></li>
        </ul>
        {/* <div>Photos of Isabella That She Likes of Herself</div> */}
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pics" element={<Home />} />
          <Route path="/buraco" element={<Home />} />
          <Route path="/happy-birthday" element={<Home />} />
          <Route path="/upcoming" element={<Home />} />
          <Route path="/acting" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </Router>
    </div>
   
  )
}

export default Izzy;