import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { 
  About,
  Acting,
  Burraco,
  Contact,
  HappyBirthday,
  Home,
  Pics,
  Upcoming,
} from '../pages';

import { NavMenu } from '../components';


const Izzy = () => {
  return (
    <div className="content-root">
      <Router>
        <NavMenu />
        {/* <div>Photos of Isabella That She Likes of Herself</div> */}
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/burraco" element={<Burraco />} />
          <Route path="/happy-birthday" element={<HappyBirthday />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
   
  )
}

export default Izzy;