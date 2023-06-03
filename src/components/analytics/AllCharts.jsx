// eslint-disable-next-line no-unused-vars
import React from 'react'
import DoughnutChart from './DoughnutChart'
import BarChartMonthly from './BarChartMonthly'
import DoughnutPayroll from './DoughnutPayrolly'
import ChartTitle from './ChartTitle'

function AllCharts() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className=' grid grid-cols-2 w-full h-full' >
            <div className='flex justify-center flex-col items-center border border-green-500 row-span-2'>
                <ChartTitle title="Employees’ Summary" />
                <DoughnutChart />
            </div>
            <div className='flex justify-center flex-col items-center border border-blue-500 row-span-2'>
                <ChartTitle title="Monthly payment summary" />
                <BarChartMonthly />
            </div>
            <div className='flex justify-center flex-col items-center border border-pink-500 row-span-2'>
            <ChartTitle title="Yearly Summary" />
                <BarChartMonthly />
            </div>
            <div className='flex justify-center flex-col items-center border border-purple-500 row-span-2'>
                <ChartTitle title="Payroll Summary" />
                <DoughnutPayroll />
            </div>
        </div>
    </div>
  )
}

export default AllCharts