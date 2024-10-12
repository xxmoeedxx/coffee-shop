import React from 'react';

const DashboardCards = () => {
  const cards = [
    { title: 'Sales', value: '2,382', icon: 'truck', change: '-3.65%', status: 'down' },
    { title: 'Visitors', value: '14,212', icon: 'users', change: '5.25%', status: 'up' },
    { title: 'Earnings', value: '$21,300', icon: 'dollar-sign', change: '6.65%', status: 'up' },
    { title: 'Orders', value: '64', icon: 'shopping-cart', change: '-2.25%', status: 'down' }
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-sm-6" key={index}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">{card.title}</h5>
                </div>
                <div className="col-auto">
                  <div className={`stat text-primary`}>
                    <i className={`align-middle`} data-feather={card.icon}></i>
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">{card.value}</h1>
              <div className="mb-0">
                <span className={`text-${card.status === 'up' ? 'success' : 'danger'}`}>
                  <i className="mdi mdi-arrow-bottom-right"></i> {card.change}
                </span>
                <span className="text-muted"> Since last week</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
