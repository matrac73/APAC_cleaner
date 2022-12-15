import { dates, total_co2 } from './data';
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
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = dates;

export const data = {
  labels,
  datasets: [
    {
      label: 'Total CO2',
      data: total_co2,
      borderColor: 'rgba(150, 200, 150, 1)',
      backgroundColor: 'rgba(150, 200, 150, 0.6)',
      tension: 0.4
    },
  ],
};

function CustomLineChart() {
  return <Line options={options} data={data} />;
}

export default CustomLineChart
