import { dates, Energy_co2, Water_co2, Waste_co2 } from './data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = dates;

export const data = {
  labels,
  datasets: [
    {
      label: 'Energy',
      data: Energy_co2,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      tension: 0.4
    },
    {
      label: 'Water',
      data: Water_co2,
      borderColor: 'rgba(53, 162, 235, 1)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
      tension: 0.4
    },
    {
        label: 'Waste',
        data: Waste_co2,
        borderColor: 'rgba(75, 192, 100, 1)',
        backgroundColor: 'rgba(75, 192, 100, 0.4)',
        tension: 0.4
      },
  ],
};

function CustomLineChart() {
  return <Line options={options} data={data} />;
}

export default CustomLineChart
