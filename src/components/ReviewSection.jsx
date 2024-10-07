import React from 'react';
import SingleReview from './SingleReview';

const ReviewSection = () => {
  return (
    <section className="review-area section-gap" id="review">
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
          <SingleReview />
          <SingleReview />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
