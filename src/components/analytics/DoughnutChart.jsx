// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'; 
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
); 

function DoughnutChart () {
  const data ={
    labels: ['Learnable', 'Dev Studio', 'Upskill', 'Scuudu'], 
    datasets: [
      {
        label: "Department", 
        data: [90, 120, 90, 60], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8bc34a'],
        cutout: "75%",
        spacing: -15,
        borderRadius: {
          outerStart: 0, 
          innerStart: 50, 
          outerEnd: 0, 
          innerEnd: -20
        },
      }
    ]
  }

  // Calculate the sum of the data array
  const sum = data.datasets[0].data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: '#6C757D', 
            usePointStyle: true,
            pointStyle: 'circle',
          }
      }
    }
  }

  return (
    <div className='w-4/5 h-4/5 relative flex justify-center items-center'>
      <Doughnut data={data} options={options} />
      <div className='absolute top-[36%] left-[50%] text-center transform -translate-x-1/2 -translate-y-1/2' >
        <span className='font-bold text-sm '>
          {sum}
        </span>
        <br />
        <p className='text-sm font-semibold '>Employees</p>
      </div>
    </div>
  );
}

export default DoughnutChart;