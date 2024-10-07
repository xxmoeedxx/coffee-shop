import React from 'react';

const SingleCounter = ({ count, label }) => {
  return (
    <div className="col-lg-3 col-md-6 single-counter">
      <h1 className="counter">{count}</h1>
      <p>{label}</p>
    </div>
  );
};

export default SingleCounter;
