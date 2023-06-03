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
    <div className='w-4/5 h-4/5 flex justify-center items-center border border-red-600'>
      <Doughnut data={data} options={options}/>
      {/* <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
        <span className="text-slate-500 mt-0.5 text-center">
          15 <br /> Employees
        </span>
      </div> */}
    </div>
  );
}

export default DoughnutChart;
