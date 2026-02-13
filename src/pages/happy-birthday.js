import React from 'react';


const HappyBirthday = () => {
  return (
    <>
      <div className="full happy-container">
        <div className="happy-inner-container">
          <p style={{
            marginBottom: '37px',
            textAlign: 'center',
            width: '400px',
          }}>
            A girl and her grandmother celebrate a birthday on a summer day in Maine.
          </p>
          <iframe
            src="https://player.vimeo.com/video/533224004?h=723717c1a6"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="happy-vimeo"
          />
          <p style={{ marginBottom: '0px' }}><strong>Independent Shorts awards Finalist for:</strong></p>
          <p className='birthday-accolades'>
            Best Mobile Short
            <strong>•</strong>
            Best First-Time Director
            <strong>•</strong>
            Best Indie Short
          </p>

          <p style={{ marginBottom: '0px' }}><strong>Los Angeles Independent Film Festival:</strong></p>
          <p className='birthday-accolades'>
            Best Woman Filmmaker
            <strong>•</strong>
            Best First-Time Filmmaker
            <strong>•</strong>
            Best Indie Short
          </p>

        </div>
      </div>
    </>
  )
}

export default HappyBirthday