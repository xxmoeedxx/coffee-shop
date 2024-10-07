import React from 'react';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
            <ul>
              <li>Mon-Fri: 8am to 2pm</li>
              <li>Sat-Sun: 11am to 4pm</li>
              <li><a href="tel:(012) 6985 236 7512">(012) 6985 236 7512</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
