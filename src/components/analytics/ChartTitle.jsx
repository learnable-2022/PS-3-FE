/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function ChartTitle(props) {
  return (
    <div className='w-4/5 mb-2'>
        <h2 className='text-[#30343F] font-bold text-lg'>{props.title}</h2>
    </div>
  )
}

export default ChartTitle