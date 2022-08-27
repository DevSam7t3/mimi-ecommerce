import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">small text</p>
      <h3>mid text</h3>
      <img src="" alt="" className="hero-banner-image" />

      <div>
        <Link href={'/product/id'}>
          <button type="button">button text</button>
        </Link>
        <div className="desc">
          <h5>description</h5>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
