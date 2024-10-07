import React from 'react';

const Banner = () => {
  return (
    <section className="banner-area" id="home" style={{
        backgroundImage: `url('/img/header-bg.jpg')`, // Add your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Fullscreen height like in the original
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-start">
          <div className="banner-content col-lg-7">
            <h6 className="text-white text-uppercase">Now you can feel the Energy</h6>
            <h1>
              Start your day with <br />
              a black Coffee
            </h1>
            <a href="#" className="primary-btn text-uppercase">Buy Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
