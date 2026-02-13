import React from 'react';


const Burraco = () => {
  return (
    <>
      <div className="full happy-container">
        <div className="happy-inner-container">
          <p style={{
            marginBottom: '23px',
            width: '530px',
            textAlign: 'center',
            }}>When Wanda’s American granddaughter comes to stay with her in suburban Rome, she seeks to close a generational divide and satisfy an unanswered desire for closeness before the summers ends.</p>
          <div className="vimeo-crop">
            <iframe 
              src='https://player.vimeo.com/video/954512319'
              width="640" 
              height="360" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen 
              className="happy-vimeo"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Burraco