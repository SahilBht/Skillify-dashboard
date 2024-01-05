import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [12, 19],
      backgroundColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: '80%', // Adjust the cutout to make the doughnut thinner
  text: 'Total Sales',
  responsive: true,
};

export default function App() {
  return <Doughnut data={data} options={options} />;
}
