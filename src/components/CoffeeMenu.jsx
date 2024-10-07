import React from 'react';
import SingleMenuItem from './SingleMenuItem';

const CoffeeMenu = () => {
  const menuItems = [
    { name: 'Cappuccino', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
    { name: 'Americano', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
    { name: 'Espresso', price: 49, description: 'Usage of the Internet is becoming more common due to rapid advance.' },
    // Add all other menu items here...
  ];

  return (
    <section className="menu-area section-gap" id="coffee">
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
          {menuItems.map((item, index) => (
            <SingleMenuItem key={index} name={item.name} price={item.price} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;
