import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ProfitLossChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Profit',
        data: data.map(item => item.profit),
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Loss',
        data: data.map(item => item.loss),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#ffffff',
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        ticks: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <div className="p-4 m-3 w-1/2 bg-gray-800 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Profit And Loss Overview</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProfitLossChart;
