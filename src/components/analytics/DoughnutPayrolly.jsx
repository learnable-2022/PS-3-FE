// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'; 
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
); 

function DoughnutPayroll () {
  const data ={
    labels: ['Pending Payment', 'Approved Payment'], 
    datasets: [
      {
        label: "Department", 
        data: [100, 260], 
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

  const options = {
          responsive: true,
          plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: 'rgb(66, 47, 198)'
                }
            }
        }
        }

  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center'>
      <Doughnut data={data} options={options}/>
    </div>
  );
}

export default DoughnutPayroll;
