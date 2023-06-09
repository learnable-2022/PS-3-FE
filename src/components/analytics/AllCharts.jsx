// eslint-disable-next-line no-unused-vars
import React from 'react'
import DoughnutChart from './DoughnutChart'
import BarChartMonthly from './BarChartMonthly'
import DoughnutPayroll from './DoughnutPayrolly'
import ChartTitle from './ChartTitle'
import BarChartYearly from './BarChartYearly'



function AllCharts() {
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