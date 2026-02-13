import React from 'react';


const HappyBirthday = () => {
  return (
    <>
      <div className="full happy-container">
        <div className="happy-inner-container">
          <p style={{marginBottom: '23px'}}>A girl and her grandmother celebrate a birthday on a summer day in Maine.</p>
          <iframe 
            src="https://player.vimeo.com/video/533224004?h=723717c1a6" 
            width="640" 
            height="360" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen 
            className="happy-vimeo"
          />
          <p style={{marginBottom: '0px'}}><strong>Independent Shorts awards Finalist for:</strong></p>
          <p style={{marginTop: '5px'}}>Best Mobile Short <strong style={{margin: '0 5px'}}>•</strong> Best First-Time Director <strong style={{margin: '0 5px'}}>•</strong> Best Indie Short</p>

          <p style={{marginBottom: '0px'}}><strong>Los Angeles Independent Film Festival:</strong></p>
          <p style={{marginTop: '5px'}}>Best Woman Filmmaker <strong style={{margin: '0 5px'}}>•</strong> Best First-Time Filmmaker <strong style={{margin: '0 5px'}}>•</strong> Best Indie Short</p>
          
        </div>
      </div>
    </>
  )
}

export default HappyBirthday