import React, { useEffect, useRef, useState } from 'react';
import '../styles/products.css';
import productsData from '../components/productData';
import categoryImages from '../components/productImages';
import bgVideo from '../assets/eurospicev1.mp4';
import Footer from '../components/Footer';

function Products() {
  
  
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
  
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observers = [];

    productsData.forEach((_, index) => {
      const element = document.getElementById(`category-${index}`);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndexes(prev => [...new Set([...prev, index])]);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <div className="productsmain">
      <div className="headproducts">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" />
        <div className="hero-text">
          <h1>Explore Our Product Catalog</h1>
          <p>Discover the finest range of spices and ingredients</p>
        </div>
      </div>

      <div className='eurospicelogo'>
        <div className='euroin'>
          <div className='e1'></div>
        </div>
      </div>

      {productsData.map((cat, idx) => (
        <div
          key={idx}
          id={`category-${idx}`}
          className={`category-card ${
            visibleIndexes.includes(idx) ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="category-header">
            <h2 className="category-title">{cat.category}</h2>
            {categoryImages[cat.category] && (
              <img
                src={categoryImages[cat.category]}
                alt={cat.category}
                className="category-decor-image"
              />
            )}
          </div>

          <div className="category-body">
            {cat.brands.map((brand, bidx) => (
              <div key={bidx} className="brand-section">
                <div className="brand-header">
                  {brand.logo && (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="brand-logo"
                    />
                  )}
                  <h3>{brand.name}</h3>
                </div>
                <ul>
                  {brand.items.map((item, iidx) => (
                    <li key={iidx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Products;
