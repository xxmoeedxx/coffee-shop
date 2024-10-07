import React, { useState, useEffect } from 'react';
import HeaderTop from './HeaderTop';
import NavBar from './NavBar';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Function to detect scroll and update state
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach scroll listener on mount, clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      id="header" 
      style={{
        backgroundColor: scrolled ? 'rgba(75, 42, 42, 0.9)' : 'transparent', // Dark brown when scrolled
        position: 'fixed',
        width: '100%',
        zIndex: 999,
        transition: 'background-color 0.3s ease', // Smooth transition
        top: 0,
        left: 0,
      }}
    >
      <HeaderTop />
      <div className="container">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="index.html"><img src="img/logo.png" alt="Logo" title="Logo" /></a>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
