import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { About, Acting, Burraco, HappyBirthday, HobbyHorseGirlz, Home, Pics, Upcoming } from '../pages';

import { NavMenu } from '../components';


const IzzyContent = () => {
  const location = useLocation();
  const isHhgPage = location.pathname === '/hobby-horse-girlz';
  
  return (
    <>
      <div
        style={{
          display: 'block',
          position: isHhgPage ? 'static' : 'fixed',
          left: isHhgPage ? undefined : '-9999px',
          top: isHhgPage ? undefined : 0,
          pointerEvents: isHhgPage ? 'auto' : 'none',
        }}
      >
        <HobbyHorseGirlz />
      </div>
      <div style={{ display: isHhgPage ? 'none' : 'block' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/burraco" element={<Burraco />} />
          <Route path="/happy-birthday" element={<HappyBirthday />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby-horse-girlz" element={<></>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};

const Izzy = () => {
  return (
    <div className="content-root">
      <Router>
        <NavMenu />
        <IzzyContent />
      </Router>
    </div>
  );
}

export default Izzy;