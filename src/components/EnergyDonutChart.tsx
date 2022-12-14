import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Energy_co2_total, Water_co2_total, Waste_co2_total } from './data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Energy'],
  datasets: [
    {
      label: 'Emission',
      data: [Energy_co2_total, Water_co2_total, Waste_co2_total],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(150, 150, 150, 0.2)',
        'rgba(150, 150, 150, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(150, 150, 150, 1)',
        'rgba(150, 150, 150, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function CustomDonutChart() {
  return <Doughnut data={data} />;
}

export default CustomDonutChart