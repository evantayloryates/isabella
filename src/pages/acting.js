import React from 'react';


const Acting = () => {
  return (
    <>
      <div className="center">
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube-nocookie.com/embed/72lrsIqKjMM" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          className='carnivore-youtube'>
        </iframe>
        {/* <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/72lrsIqKjMM" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe> */}
      </div>
    </>
  )
}

export default Acting