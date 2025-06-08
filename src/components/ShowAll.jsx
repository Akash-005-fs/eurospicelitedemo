import React, { useEffect, useRef, useState } from 'react';
import '../styles/comp-showall.css';
import { Link } from 'react-router-dom';

function ShowAll() {
  const productsRef = useRef(null);
  const brandsRef = useRef(null);
  const [productsVisible, setProductsVisible] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === productsRef.current && entry.isIntersecting) {
            setProductsVisible(true);
          }
          if (entry.target === brandsRef.current && entry.isIntersecting) {
            setBrandsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (productsRef.current) observer.observe(productsRef.current);
    if (brandsRef.current) observer.observe(brandsRef.current);

    return () => {
      if (productsRef.current) observer.unobserve(productsRef.current);
      if (brandsRef.current) observer.unobserve(brandsRef.current);
    };
  }, []);

  return (
    <div className='showallmain'>

      <div
        className={`products ${productsVisible ? 'animate-slide-up' : ''}`}
        ref={productsRef}
      >
        <div className='text-area'>
          <h2>Discover Products</h2>
          <Link to="/products">
            <button className="discover-btn">Discover</button>
          </Link>
        </div>
        <div className='productsin hover-zoom'></div>
      </div>

      <div
        className={`brands ${brandsVisible ? 'animate-slide-up' : ''}`}
        ref={brandsRef}
      >
        <div className='text-area'>
          <h2>Discover Brands</h2>
          <Link to="/brands">
            <button className="discover-btn">Discover</button>
          </Link>
        </div>
        <div className='brandsin hover-zoom'></div>
      </div>

    </div>
  );
}

export default ShowAll;
