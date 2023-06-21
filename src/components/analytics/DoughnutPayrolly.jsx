// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'; 
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
); 

function DoughnutPayroll ({paidData, pendingData}) {
  const data ={
    labels: ['Pending Payment', 'Successful Payment'], 
    datasets: [
      {
        label: "Department", 
        data: [pendingData, paidData], 
        backgroundColor: ['#FF6384', '#36A2EB'],
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
    <div className='w-[90%] md:w-4/5 h-[90%] md:h-4/5 relative flex justify-center items-center'>
      <Doughnut data={data} options={options}/>
      <div className='absolute md:top-[36%] top-[30%] left-[50%] text-center transform -translate-x-1/2 -translate-y-4 md:-translate-y-1/2 text-gray-500' >
        <span className='font-bold text-lg sm:text-2xl md:text-sm'>
          {sum}
        </span>
        <br />
        <p className='text-lg sm:text-2xl md:text-sm font-semibold'>Payments</p>
      </div>
    </div>
  );
}

export default DoughnutPayroll;
