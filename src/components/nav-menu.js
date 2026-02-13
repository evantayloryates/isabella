import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import marcia from '../assets/images/marcia.png';
import rose from '../assets/images/rose.gif';
import ciggy from '../assets/images/ciggy.png';
import mango1 from '../assets/images/mango1.png';
import alien from '../assets/images/alien.png';
import nona from '../assets/images/nona.png';
import smoke from '../assets/images/smoke.gif';
import peach from '../assets/images/peach.png';

function setDOMSelectionColor(color) {
  var rule = `::selection { color: ${color} }`;


  var styleElement = document.createElement("style");
  styleElement.appendChild(document.createTextNode(rule));

  var existingStyleElement = document.querySelector("style[data-selection-color]");
  if (existingStyleElement) {
    document.head.removeChild(existingStyleElement);
  }

  styleElement.setAttribute("data-selection-color", color);
  document.head.appendChild(styleElement);
}

const NavMenu = () => {

  const ROUTES = [
    { path: '/',                  label: 'Home',              },
    { path: '/hobby-horse-girlz', label: 'Hobby Horse Girlz', },
    { path: '/pics',              label: 'Pics?',             },
    { path: '/burraco',           label: 'Burraco',           },
    { path: '/happy-birthday',    label: 'Happy Birthday',    },
    { path: '/upcoming',          label: 'Upcoming',          },
    { path: '/acting',            label: 'Acting',            },
    { path: '/about',             label: 'About',             },
  ]

  const { pathname } = useLocation();
  
  if (pathname === '/') {
    setDOMSelectionColor('white');
  } else { 
    setDOMSelectionColor('black');
  }

  const dynamicClass = pathname === '/' ? 'inverted' : '';
  return (
    <>
      <ul className={`nav-menu ${dynamicClass}`}>
        {ROUTES.map(({ path, label }) => (
          <li key={path} className={`${pathname === path && 'show'}`}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <img className="rose" src={rose} />
      </Link>
      <Link to="/happy-birthday">
        <img className="marcia" src={marcia}/>
      </Link>
      <img className="mango1" src={mango1}/>
      <img className="peach" src={peach}/>
      <Link to="/burraco">
        <img className="nona" src={nona}/>
      </Link>
      <div className="ciggy-container">
        <img className="ciggy" src={ciggy}/>
        <img className="smoke" src={smoke}/>
      </div>
    </>
  )
}

export default NavMenu;