import React from 'react';

const NewsletterForm = () => {
  return (
    <div className="col-lg-5 col-md-6 col-sm-6">
      <div className="single-footer-widget">
        <h6>Newsletter</h6>
        <p>Stay update with our latest</p>
        <form action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline" target="_blank" noValidate>
          <input className="form-control" name="EMAIL" placeholder="Enter Email" required type="email" />
          <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
