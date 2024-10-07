import React from 'react';

const FooterWidget = () => {
  return (
    <div className="col-lg-5 col-md-6 col-sm-6">
      <div className="single-footer-widget">
        <h6>About Us</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
        </p>
      </div>
    </div>
  );
};

export default FooterWidget;
