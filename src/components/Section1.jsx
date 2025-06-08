import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/section1.css";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const sectionRef = useRef();
  const textRef = useRef();
  const handRef = useRef();
  const spoonRef = useRef();
  const spicesRef = useRef([]);

  useEffect(() => {
    spicesRef.current = spicesRef.current.slice(0, 30);

   const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: "+=1500", // reduced for faster scroll
    scrub: 1.5,     // slightly smoother scrub
    pin: true,
    pinSpacing: true,
    snap: 1 / 3,    // reduced snapping interval
  }
});

tl.to(textRef.current, { y: -300, opacity: 0.5, ease: "power3.out" }, 0)
  .to(handRef.current, { y: -300, opacity: 1, ease: "power3.out" }, 0)
  .to(spicesRef.current, {
    y: -200,
    opacity: 0,
    stagger: 0.015, // tighter spice animation
    ease: "power3.out"
  }, 0.2);


    // Spoon locked at top visually
    gsap.set(spoonRef.current, { y: 0 });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className='section1main' ref={sectionRef}>
      <div className='htextcont' ref={textRef}>
        <h1>where</h1>
        <h1>spices</h1>
        <h1>tells</h1>
        <h1>stories</h1>
        
      </div>

      <div className='spices-container'>
        {Array.from({ length: 30 }).map((_, i) => {
          const left = Math.random() * 80 - 40;
          const size = Math.random() * 4 + 4;
          return (
            <div
              key={i}
              className='spice'
              ref={el => spicesRef.current[i] = el}
              style={{
                left: `${left}px`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      <div className='hand' ref={handRef}></div>
      <div className='spoon fixed-spoon' ref={spoonRef}></div>
    </div>
  );
}

export default Section1;
