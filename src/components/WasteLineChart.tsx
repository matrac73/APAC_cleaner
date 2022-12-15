import { 
  dates, 
  General_co2, 
  FoodWaste_co2, 
  PlasticWaste_co2,
  RecycledCans_co2,
  RecycledGlass_co2,
  RecycledPaper_co2,
  RecycledPlastic_co2
} from './data';
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
        label: 'General',
        data: General_co2,
        borderColor: 'rgba(0, 192, 100, 1)',
        backgroundColor: 'rgba(0, 192, 100, 0.2)',
        tension: 0.4
      },
      {
        label: 'FoodWaste',
        data: FoodWaste_co2,
        borderColor: 'rgba(200, 192, 100, 1)',
        backgroundColor: 'rgba(200, 192, 100, 0.2)',
        tension: 0.4
      },
      {
        label: 'PlasticWaste',
        data: PlasticWaste_co2,
        borderColor: 'rgba(75, 300, 100, 1)',
        backgroundColor: 'rgba(75, 300, 100, 0.2)',
        tension: 0.4
      },
      {
        label: 'RecycledCans',
        data: RecycledCans_co2,
        borderColor: 'rgba(75, 0, 100, 1)',
        backgroundColor: 'rgba(75, 0, 100, 0.2)',
        tension: 0.4
      },
      {
        label: 'RecycledGlass',
        data: RecycledGlass_co2,
        borderColor: 'rgba(75, 192, 300, 1)',
        backgroundColor: 'rgba(75, 192, 300, 0.2)',
        tension: 0.4
      },
      {
        label: 'RecycledPaper',
        data: RecycledPaper_co2,
        borderColor: 'rgba(75, 192, 0, 1)',
        backgroundColor: 'rgba(75, 192, 0, 0.2)',
        tension: 0.4
      },
      {
        label: 'RecycledPlastic',
        data: RecycledPlastic_co2,
        borderColor: 'rgba(75, 192, 100, 1)',
        backgroundColor: 'rgba(75, 192, 100, 0.2)',
        tension: 0.4
      },
  ],
};

function CustomLineChart() {
  return <Line options={options} data={data} />;
}

export default CustomLineChart
