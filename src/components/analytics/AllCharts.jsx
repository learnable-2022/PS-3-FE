// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import DoughnutChart from './DoughnutChart'
import BarChartMonthly from './BarChartMonthly'
import DoughnutPayroll from './DoughnutPayrolly'
import ChartTitle from './ChartTitle'
import BarChartYearly from './BarChartYearly'
// import { setAuthToken } from '../setAuthToken'
// import axios from 'axios'



function AllCharts({ data, item}) {
    const filteredArrays = [];
    const historyData = data ? data : [];
    const departments = [];
    const departmentNumbers = [];
    
    const employeeData = item.length ? (item) : null;
    const pendingData = employeeData ? employeeData.filter(employee => employee.status != "Paid").length : [];
    const paidData = employeeData ? employeeData.filter(employee => employee.status == "Paid").length : [];

    historyData.forEach(person => {
        if(filteredArrays[person.department]){
            filteredArrays[person.department].push(person);
        } else {
            filteredArrays[person.department] = [person];
        }
    })

    
    if(filteredArrays){
        Object.entries(filteredArrays).map(item => departments.push(item[0]));
        Object.entries(filteredArrays).map(item => departmentNumbers.push(item[1].length));
    }

  return (
    <div className='flex justify-center items-center w-full min-h-[490px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full' >
            <div className='flexjustify-center flex-col items-center row-span-2'>
                <ChartTitle title="Employees’ Summary" />
                <DoughnutChart departments={departments} departmentNumbers={departmentNumbers} />
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
                <DoughnutPayroll paidData={paidData} pendingData={pendingData} />
            </div>
        </div>
    </div>
  )
}

export default AllCharts