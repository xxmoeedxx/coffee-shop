import React from 'react';

const GalleryItem = ({ src }) => {
  return (
    <div className="col-lg-4">
      <a href={src} className="img-pop-home">
        <img className="img-fluid" src={src} alt="Gallery Item" />
      </a>
    </div>
  );
};

export default GalleryItem;
