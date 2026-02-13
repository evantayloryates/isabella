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
import home from '../assets/images/home-avatar.png';

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
  const { pathname } = useLocation();
  
  if (pathname === '/') {
    setDOMSelectionColor('white');
  } else { 
    setDOMSelectionColor('black');
  }
  
  const bodyBGColor = '#e2d0cb';
  document.body.style.backgroundColor = bodyBGColor;
  
  // const bodyFGColor = pathname === '/' ? 'black' : 'rgb(255, 0, 0)';
  const bodyFGColor = 'black';
  document.body.style.color = bodyFGColor;

  const dynamicClass = pathname === '/' ? 'inverted' : '';
  console.log('pathname: ', pathname)
  return (
    <>
      <ul className={`nav-menu ${dynamicClass}`}>
        {/* <li className={`${pathname === '/' && 'show'}`}>          
          <Link to="/">
            <img src={home} style={{height: '54px', width: '54px'}}/>
          </Link>
        </li> */}
        <li className={`${pathname === '/' && 'show'}`}>          
          <Link to="/">Home</Link>
        </li>
        <li className={`${pathname === '/hobby-horse-girlz' && 'show'}`}>          
          <Link to="/hobby-horse-girlz">Hobby Horse Girlz</Link>
        </li>
        <li className={`${pathname === '/pics' && 'show'}`}>          
          <Link to="/pics">Pics?</Link>
        </li>
        <li className={`${pathname === '/burraco' && 'show'}`}>          
          <Link to="/burraco">Burraco</Link>
        </li>
        <li className={`${pathname === '/happy-birthday' && 'show'}`}>          
          <Link to="/happy-birthday">Happy Birthday</Link>
        </li>
        <li className={`${pathname === '/upcoming' && 'show'}`}>          
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li className={`${pathname === '/acting' && 'show'}`}>          
          <Link to="/acting">Acting</Link>
        </li>
        <li className={`${pathname === '/about' && 'show'}`}>          
          <Link to="/about">About</Link>
        </li>
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