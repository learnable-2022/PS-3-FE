// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2'; 
ChartJS.register(
  BarElement, CategoryScale, LinearScale,
  Tooltip, 
  Legend
); 

function BarChartYearly () {
  const data ={
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'], 
    datasets: [
      {
        label: "Payments", 
        data: [20, 35, 70, 90, 120], 
        backgroundColor: ['#422fc6'],
        // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8bc34a', '#422fc6'],
        borderRadius: {
          bottomRight: 0, 
          bottomLeft: 0, 
          topRight: 8, 
          topLeft: 8
        },
        borderWidth: 0
      }
    ]
  }

  const options = {
          responsive: true,
          plugins: {
            legend: {
                display: false,
                position: 'bottom',
                // labels: {
                //   color: 'rgb(66, 47, 198)',
                // }
            }
        }
        }

  return (
    <div className='w-4/5 h-4/5 flex justify-center items-center'>
      <Bar data={data} options={options}/>
    </div>
  );
}

export default BarChartYearly;
