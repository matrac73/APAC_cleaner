import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Waste_co2_total } from './data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Waste'],
  datasets: [
    {
      label: 'Emission',
      data: [Waste_co2_total],
      backgroundColor: [
        'rgba(75, 192, 100, 0.4)',
      ],
      borderColor: [
        'rgba(75, 192, 100, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function CustomDonutChart() {
  return <Doughnut data={data} />;
}

export default CustomDonutChart