import React from 'react';
import GalleryItem from './GalleryItem';

const GallerySection = () => {
  const galleryItems = ['img/g1.jpg', 'img/g3.jpg', 'img/g2.jpg', 'img/g4.jpg', 'img/g5.jpg'];

  return (
    <section className="gallery-area section-gap" id="gallery">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">What kind of Coffee we serve for you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {galleryItems.map((src, index) => (
            <GalleryItem key={index} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
