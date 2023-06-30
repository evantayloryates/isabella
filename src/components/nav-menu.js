import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import marcia from '../assets/images/marcia.png';
import rose from '../assets/images/rose.gif';
import ciggy from '../assets/images/ciggy.png';
import mango1 from '../assets/images/mango1.png';
import alien from '../assets/images/alien.png';
import nona from '../assets/images/nona.png';
import smoke from '../assets/images/smoke.gif';

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
  const bodyBGColor = pathname === '/' ? 'rgb(255, 66, 66)' : 'white';
  document.body.style.backgroundColor = bodyBGColor;
  
  const bodyFGColor = pathname === '/' ? 'black' : 'rgb(255, 66, 66)';
  document.body.style.color = bodyFGColor;

  const dynamicClass = pathname === '/' ? 'inverted' : '';

  return (
    <>
      <ul className={`nav-menu ${dynamicClass}`}>
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
      <Link to="/">
        <img className="rose" src={rose} />
      </Link>
      <img className="marcia" src={marcia}/>
      <img className="mango1" src={mango1}/>
      <img className="alien" src={alien}/>
      <img className="nona" src={nona}/>
      <div className="ciggy-container">
        <img className="ciggy" src={ciggy}/>
        <img className="smoke" src={smoke}/>
      </div>
    </>
  )
}

export default NavMenu;