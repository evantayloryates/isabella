import React from 'react';


const Burraco = () => {
  return (
    <>
      <div className="full happy-container">
        <div className="happy-inner-container">
          {/* <p style={{marginBottom: '23px'}}>A girl and her grandmother celebrate a birthday on a summer day in Maine.</p> */}
          <iframe 
            src="https://player.vimeo.com/video/864257878?h=ac869b27c7"
            width="640" 
            height="360" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen 
            className="happy-vimeo"
          />
        </div>
      </div>
    </>
  )
}

export default Burraco