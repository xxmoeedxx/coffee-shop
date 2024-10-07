import React from 'react';

const SingleReview = () => {
  return (
    <div className="col-lg-6 col-md-6 single-review">
      <img src="img/r1.png" alt="Review" />
      <div className="title d-flex flex-row">
        <h4>lorem ipsum</h4>
        <div className="star">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      </div>
      <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
    </div>
  );
};

export default SingleReview;
