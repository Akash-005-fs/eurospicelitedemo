

import React, { useState, useEffect } from 'react';
import "../styles/comp-land.css";
import myVideo from '../assets/vvvv2.mp4';
import logoImage from '../assets/FEG.png';
import logoImage2 from '../assets/spicesss.png';
import { Link } from "react-router-dom";
function Land() {





  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <div className='landmain'>
      <div className="ltop">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src={myVideo} type="video/mp4" />
        </video>

        <div className="video-overlay" />

        <div className="nav-wrapper">
          <div className="nav">
            <div className="logo">
              <img src={logoImage} alt="Logo" />
            </div>

        

<div className={`nav-links ${menuOpen ? 'open' : ''}`}>
  <Link onClick={closeMenu} to="/">Home</Link>
  <Link onClick={closeMenu} to="/about">About Us</Link>
  <Link onClick={closeMenu} to="/products">Products</Link>
  <Link onClick={closeMenu} to="/contact">Contact</Link>
</div>
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`bar ${menuOpen ? 'rotate1' : ''}`} />
              <div className={`bar ${menuOpen ? 'rotate2' : ''}`} />
            </div>
          </div>
        </div>

        {menuOpen && <div className="backdrop" onClick={closeMenu} />}
      </div>

      {!menuOpen && (
        <div className="circle-wrapper">
          <div className="circle-container">
            <div className="circle-image">
              <img src={logoImage2} alt="center icon" />
            </div>

            <svg className="circle-text" viewBox="0 0 200 200">
              <defs>
                <path
                  id="textcircle"
                  d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
                />
              </defs>
              <text>
                <textPath href="#textcircle" startOffset="0%">
                  TRUST · RELIABLE · PROMISE · TRUST · RELIABLE · PROMISE · TRUST · RELIABLE · PROMISE ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      )}

      <div className='lbottom'>
     

<div className="lmain">
  <h1>Welcome to Euro Spice</h1>
  <div className="limg"><div className='limgin'></div></div>
</div>





<div className='lbleft'>
  <div className='intro-text'>
    <h1>Welcome to Euro Spice</h1>
   <p>
  Bridging the rich flavors of India with the heart of Europe.<br />
  We specialize in exporting premium spices and authentic grocery products,<br />
  sourced directly from India's finest farms and delivered with care across Europe.
</p>

  </div>
</div>


<div className='lbright'><div className='lbrightin'></div></div>


      </div>
    </div>
  );
}

export default Land;
