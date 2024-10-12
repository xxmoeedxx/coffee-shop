import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RecentMovementChart = () => {
  const chartRef = useRef(null); // Create a ref to hold the chart instance

  useEffect(() => {
    const ctx = document.getElementById('recent-movement-chart').getContext('2d');

    // Destroy existing chart instance if any before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Sales ($)",
          data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327],
          fill: true,
          borderColor: '#007bff',
          backgroundColor: 'rgba(215, 227, 244, 0.2)',
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: { display: true },
          y: { display: true }
        }
      }
    });

    // Cleanup on component unmount or before a new chart is rendered
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array means this will only run once after the initial render

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Recent Movement</h5>
      </div>
      <div className="card-body">
        <canvas id="recent-movement-chart" height="200"></canvas>
      </div>
    </div>
  );
};

export default RecentMovementChart;
