import React from 'react';

const SocialLinks = () => {
  return (
    <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
      <div className="single-footer-widget">
        <h6>Follow Us</h6>
        <p>Let us be social</p>
        <div className="footer-social d-flex align-items-center">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-behance"></i></a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
