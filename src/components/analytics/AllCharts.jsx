// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import DoughnutChart from './DoughnutChart'
import BarChartMonthly from './BarChartMonthly'
import DoughnutPayroll from './DoughnutPayrolly'
import ChartTitle from './ChartTitle'
import BarChartYearly from './BarChartYearly'
// import axios from 'axios'



function AllCharts() {
    // const [record, setRecord] = useState([]); 
    // const [loading, setLoading] = useState(false); 

    // useEffect(() => {
    //     fetchRecord();
    //   }, []);
    
    //   const fetchRecord = async () => {
    //     setLoading(true);
    //     try {
    //       const response = await axios.get("https://autopay-qv54.onrender.com/api/v1/history", {
    //         headers: {
    //           'Authorization': `${setAuthToken()}`,
    //         },
    //       });
    //       setRecord(response.data.data);
    //       console.log(record);
    //       setLoading(false)
    //     } catch (error) {
    //         setLoading(false)
    //         console.log("Error: ", error);
    //     }
    //   };

  return (
    <div className='flex justify-center items-center w-full min-h-[490px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full' >
            <div className='flexjustify-center flex-col items-center row-span-2'>
                <ChartTitle title="Employees’ Summary" />
                <DoughnutChart />
            </div>
            <div className='flex justify-center flex-col items-center row-span-2 min-h-[300px]'>
                <ChartTitle title="Monthly payment summary" />
                <BarChartMonthly />
            </div>
            <div className='flex justify-center flex-col items-center row-span-2 min-h-[300px]'>
            <ChartTitle title="Yearly Summary" />
                <BarChartYearly />
            </div>
            <div className='flex justify-center flex-col items-center row-span-2'>
                <ChartTitle title="Payroll Summary" />
                <DoughnutPayroll />
            </div>
        </div>
    </div>
  )
}

export default AllCharts