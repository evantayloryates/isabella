import React from 'react';


const About = () => {
  return (
    <>
      <div className="center about-container">
        <p style={{maxWidth: '293px', textAlign: 'center'}}>
          Isabella Tagliati is an incredibly sm*rt, t*lented, and g*rgeous 
          s*permodel. In her downtime she acts, writes and directs (in no 
          particular order). She grew up in New York and LA (but she’s not 
          a bitch about it). She currently lives in Los Angeles with her cat, 
          life partner and muse, Mango.
        </p>
        <hr style={{width: '100%', marginTop: '14px', border: 'none', borderTop: '1px solid black'}}/>
        <p style={{fontSize: '22px'}}><strong>Talk to me, baby</strong></p>
        <a href="mailto:isabellatagliati@gmail.com" className="contact-link">isabellatagliati@gmail.com</a>
      </div>
    </>
  )
}

export default About