import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { About, Home, Pics, Upcoming } from '../pages';

import { NavMenu } from '../components';
import { PreloadProvider, PreloadPortal } from '../components/preloadable';
import { HobbyHorseGirlzPage, HappyBirthdayPage, BurracoPage, ActingPage } from '../preloadables';

const Izzy = () => {
  return (
    <div className="content-root">
      <Router>
        <PreloadProvider>
          <NavMenu />
          <PreloadPortal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pics" element={<Pics />} />
            <Route path="/burraco" element={<BurracoPage />} />
            <Route path="/happy-birthday" element={<HappyBirthdayPage />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/acting" element={<ActingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/hobby-horse-girlz" element={<HobbyHorseGirlzPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PreloadProvider>
      </Router>
    </div>
  );
}

export default Izzy;