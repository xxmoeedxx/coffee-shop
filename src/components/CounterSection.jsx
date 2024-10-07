import React from 'react';
import SingleCounter from './SingleCounter';

const CounterSection = () => {
  const counters = [
    { count: 2536, label: 'Happy Client' },
    { count: 7562, label: 'Total Projects' },
    { count: 2013, label: 'Cups Coffee' },
    { count: 10536, label: 'Total Submitted' }
  ];

  return (
    <div className="row counter-row">
      {counters.map((counter, index) => (
        <SingleCounter key={index} count={counter.count} label={counter.label} />
      ))}
    </div>
  );
};

export default CounterSection;
