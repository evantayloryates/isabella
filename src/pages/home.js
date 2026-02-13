import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();

  const handleLetterClick = () => {
    nav('/about')
  }
  return (
    <>
      <div className="center">
        <div className="per-letter first">
          <h1 onClick={handleLetterClick} className="letter">I</h1>
          <h1 onClick={handleLetterClick} className="letter">S</h1>
          <h1 onClick={handleLetterClick} className="letter">A</h1>
          <h1 onClick={handleLetterClick} className="letter">B</h1>
          <h1 onClick={handleLetterClick} className="letter">E</h1>
          <h1 onClick={handleLetterClick} className="letter">L</h1>
          <h1 onClick={handleLetterClick} className="letter">L</h1>
          <h1 onClick={handleLetterClick} className="letter">A</h1>
        </div>
        <div className="per-letter last">
          <h1 onClick={handleLetterClick} className="letter">T</h1>
          <h1 onClick={handleLetterClick} className="letter">A</h1>
          <h1 onClick={handleLetterClick} className="letter">G</h1>
          <h1 onClick={handleLetterClick} className="letter">L</h1>
          <h1 onClick={handleLetterClick} className="letter">I</h1>
          <h1 onClick={handleLetterClick} className="letter">A</h1>
          <h1 onClick={handleLetterClick} className="letter">T</h1>
          <h1 onClick={handleLetterClick} className="letter">I</h1>
        </div>
      </div>
    </>
  )
}

export default Home