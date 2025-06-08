import React, { useEffect, useRef, useState } from 'react';
import "../styles/section3.css";

function Section3() {
  const imageRef = useRef(null);
  const brandRef = useRef(null);
  const frontalRef = useRef(null);

  const [inView, setInView] = useState({
    image: false,
    brand: false,
    frontal: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              setInView(prev => ({ ...prev, image: true }));
            }
            if (entry.target === brandRef.current) {
              setInView(prev => ({ ...prev, brand: true }));
            }
            if (entry.target === frontalRef.current) {
              setInView(prev => ({ ...prev, frontal: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (brandRef.current) observer.observe(brandRef.current);
    if (frontalRef.current) observer.observe(frontalRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section3main">
      <div className="productwrapper3">
        <div ref={imageRef} className={`image3 ${inView.image ? 'fade-in' : ''}`}>
          <div className="image13">
            <div className="image1in3"></div>
          </div>
        </div>

        <div className="text3">
          <h1>Curry Mixes</h1>
        </div>

        <div ref={frontalRef} className={`frontal3 ${inView.frontal ? 'stomp-effect' : ''}`}></div>
{/* 
<div ref={frontalRef} className={`frontal3 ${inView.frontal ? 'photo-zoom' : ''}`}></div> */}


        <div ref={brandRef} className={`brand3 ${inView.brand ? 'fade-in' : ''}`}>
          <div className="brand13">
            <div className="brand1in3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
