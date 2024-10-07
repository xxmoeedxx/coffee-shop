import React from 'react';
import FooterWidget from './FooterWidget';
import NewsletterForm from './NewsletterForm';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <FooterWidget />
          <NewsletterForm />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
