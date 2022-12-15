import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { dates, total_co2 } from './data';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '',
    },
  },
};

export const data = {
  labels : dates,
  datasets: [
    {
      label: 'Total CO2 emission',
      data: total_co2,
      backgroundColor: 'rgba(150, 200, 150, 0.7)',
    },
  ],
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{display: false, ticks: {min: 0}}],
      yAxes: [{display: false}],
    }
  }
};

function CustomTuto() {
  return <Bar options={options} data={data} />;
}

export default CustomTuto
