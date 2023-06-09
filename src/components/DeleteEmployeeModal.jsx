/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {BiUserX} from 'react-icons/bi'
import {ImCancelCircle} from 'react-icons/im'

const DeleteEmployeeModal = (props) => {

  // onClick={props.toggleDelEmployee}
  return ( 
    <>
        {props.isDelOpen ? 
        <div  className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-10'>
          <div  className='w-screen h-screen absolute bg-gray-500 flex justify-center items-center bg-opacity-70'>
            <div className='w-[95%] md:w-4/5 h-[35%] rounded-lg border border-red-500'>
            <article 
                className='flex flex-col justify-between bg-white h-full border border-green-500 rounded-lg px-4 pb-4 '
            >
                <div className='text-[#30343F]'>
                  <h2 className=' text-lg'>Remove Account</h2> 
                </div>
                <div className=' w-full'>
                <table className=" border-l border-r w-full text-sm text-left text-gray-500 rounded-lg">
                    <thead className="text-xs text-white capitalize bg-[#422FC6] rounded-t-md text-center rounded-lg">
                        <tr>
                            <th scope="col" className="md:px-3 py-3 rounded-tl-lg">
                              Employee ID
                            </th>
                            <th scope="col" className="md:px-12 py-3">
                              Full Name
                            </th>
                            <th scope="col" className="md:px-6 py-3">
                              Department
                            </th>
                            <th scope="col" className="md:px-6 py-3 sm:rounded-tr-lg">
                              Performance
                            </th>
                            <th scope="col" className="hidden sm:block px-6 py-3 rounded-tr-lg">
                              Gross Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-center">
                      <tr className="bg-white border-b capitalize">
                          <td scope="row" className="md:px-3 capitalize py-4 font-medium text-gray-900 whitespace-nowrap">
                            {props.selectedEmp.employeeId}
                          </td>
                          <td className="md:px-12 py-4">
                            {`${props.selectedEmp.firstName} ${props.selectedEmp.lastName}`}
                          </td>
                          <td className="md:px-6 py-4">
                            {props.selectedEmp.department}
                          </td>
                          <td className="md:px-6 py-4">
                            {props.selectedEmp.performance}
                          </td>
                          <td className="px-6 py-4 uppercase hidden sm:block ">
                            NGN{props.selectedEmp.grossSalary}
                          </td>
                      </tr>
                    </tbody>
                </table>
                </div>
                <div className="w-full grid grid-cols-2 text-sm text-white">

                    <div className="w-full ">
                      <button onClick={props.toggleDelEmployee}
                            className=" bg-[#422FC6] hover:bg-blue-600 py-2 px-4 flex items-start justify-center rounded-md">
                            <span className="mt-[2px] text-lg mr-1"><ImCancelCircle /></span>
                            Cancel
                        </button>
                    </div>
                    <div className=" w-full flex justify-end items-center ">
                        <button onClick={props.handleDeleteEmp}
                            className="bg-[#DC3545] hover:bg-red-500 py-2  px-4 flex items-start justify-center rounded-md">
                            <span className="mt-[2px] text-lg mr-1"><BiUserX /></span> 
                            Remove
                        </button>
                    </div>
                </div>
            </article>
            </div>
        </div>
        </div> : null }
        {props.successModal && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 shadow-md rounded-lg">
              <div className="flex items-center justify-center text-lg text-red-600 rounded-lg text-center">
                <p >Successfully Delete <span className='ml-2'>{`${props.selectedEmp.firstName} ${props.selectedEmp.lastName}`}</span></p>
              </div>
            </div>
          )}
    </>
  )
}

export default DeleteEmployeeModal