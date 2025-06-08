import React from 'react'
import "../styles/about.css"
import Footer from '../components/Footer'
import aboutVideo from '../assets/eurospicev1.mp4';
function About() {
  return (
    <div className='aboutmain'>


    <div className="leftarrow">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />
      <h1>About Us</h1>
    </div>

<div className='contents'>



<div className='cleft'><div className='leftlogo'><div className='leftlogoin'></div></div></div>

<div className="cright">
  <p>
    At <strong>Euro Spice</strong>, we deliver authentic Indian flavors to Europe with a commitment to quality and sustainability. From bold turmeric to rich cardamom, our spices elevate every dish with purity and tradition.
  </p>
</div>



</div>



<Footer />



    </div>
  )
}

export default About