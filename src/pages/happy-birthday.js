import React from 'react';


const HappyBirthday = () => {
  return (
    <>
      <div className="full happy-container">
        <iframe 
          src="https://player.vimeo.com/video/533224004?h=723717c1a6" 
          width="640" 
          height="360" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowfullscreen 
          className="happy-vimeo"
        />
        <p>
          A girl and her grandmother celebrate a birthday on a summer day in Maine.
        </p>
        <p>
          Independent Shorts awards Finalist for: Best Mobile Short, Best First 
          Time Director, Best Indie Short
        </p>
        <p>
          Los Angeles Independent Film Festival: Best Woman Filmmaker, Best First 
          Time Filmmaker
        </p>
      </div>
    </>
  )
}

export default HappyBirthday