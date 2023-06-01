/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {RiSearchLine} from "react-icons/ri";
import {RxCaretDown} from "react-icons/rx";
import FetchTotalnetpay from "./FetchTotalnetpay";
import "../assets/styles/tablescroll.css"

function MainContainer (props) { 
  const [searchText, setSearchText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const departments = props.data ? Array.from(new Set(props.data.map(item => item.department))) : null;
  const employeeData = props.data ? props.data.filter((employee) => employee.department.includes(selectedValue)) : null;

  const handleSearchName = (event) => {
    setSearchText(event)
  };
  const handleSelectChange = (event) => {
    if (event == 'all') {
      setSelectedValue("")
    } else {
      setSelectedValue(event)
    }
  };

  const filteredNames = employeeData ? employeeData.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchText.toLowerCase()) || employee.lastName.toLowerCase().includes(searchText.toLowerCase()) || employee._id.toLowerCase().includes(searchText.toLowerCase())
  ) : [];

  
  return (
    <main className="px-1 flex flex-col w-full h-full"> 
        <div className="flex flex-col w-full px-4 relative">
          <div className="min-w-full flex mt-6 mb-3">
            <h2 className="font-bold">Employees</h2>
          </div>

          <div className="w-full mb-6 md:mb-0 flex items-center">
            <label className="block tracking-wide text-[#262626] mb-2" htmlFor="grid-state">
              Who would you like to Pay?
            </label>
            <div className="relative ml-6">
              <select 
                value={selectedValue} 
                onChange={(event) => handleSelectChange(event.target.value)}
                className="block appearance-none w-full border border-[#735290] text-[#735290] py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-state"
              >
                <option value='all'>All Employees</option>
                {departments ? (
                  departments.map((items, index) => (
                    <option value={items} key={index}>{items}</option>
                  ))
                
                ) : (
                  <option>...</option>
                )}
              </select>
            <span className="pointer-events-none text-2xl absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <RxCaretDown />
            </span>
          </div>
          </div>

          {/* BEGIN: The search input and pay button */}
          <div className="flex justify-between items-center my-4">
            <form className=" rounded-lg flex items-center">
              <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder="Search Employee"
                onChange={(event) => handleSearchName(event.target.value)}
                className="w-60 h-9 rounded-tl-lg rounded-bl-lg focus:border-[#422FC6] outline-none px-2 border border-[#899197]"/>
              <button className="flex justify-center items-center h-full rounded-tr-lg rounded-br-lg bg-[#422FC6]">
                <span className=" px-3 py-[9px] text-lg h-full text-white font-bold"><RiSearchLine/></span>
              </button>
            </form>

            <div  className="flex justify-between items-center">
              <div className="mr-4 text-sm px-7 py-2 border border-[#A396FF] rounded-md">
                <h4 className="font-bold text-[#735290]">Total Net Salary: <span className="text-[#422FC6] font-bold">NGN<FetchTotalnetpay/></span></h4>
              </div>
              <button className=" py-2 px-5 rounded-lg text-white bg-[#422FC6] hover:scale-105" onClick={props.togglePaySLip}>Pay Now</button> 
            </div>
          </div>
          {/* END: The search input and pay button */}

          {/* BEGIN: Table development */}
          
          <div className="relative w-full max-h-96 flex justify-center items-start overflow-y-scroll" >
            
            <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg w-full mt-2">
                <table className=" border-l border-r w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-white capitalize bg-[#422FC6] rounded-t-md text-center">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                              Employee ID
                            </th>
                            <th scope="col" className="px-9 py-3">
                              Full Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Department
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Performance
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Account Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Gross Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Net Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-center">
                        {filteredNames.length !== 0 ? (
                          filteredNames.map(details => (
                            <tr className="bg-white border-b capitalize" key={details._id}>
                          <th scope="row" className="px-4 capitalize py-4 font-medium text-gray-900 whitespace-nowrap">
                            {details._id}
                          </th>
                          <td className="px-12 py-4">
                            {`${details.firstName} ${details.lastName}`}
                          </td>
                          <td className="px-6 py-4">
                            {details.department}
                          </td>
                          <td className="px-6 py-4">
                              4.7
                          </td>
                          <td className="px-6 py-4">
                            {details.accountNumber}
                          </td>
                          <td className="px-6 py-4 uppercase">
                            NGN{details.grossSalary}
                          </td>
                          <td className="px-6 py-4 uppercase">
                            NGN{details.netSalary}
                          </td>
                      </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="px-6 py-4 uppercase font-medium text-gray-900">No item found.</td>
                          </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>

          </div>
          
          {/* END: Table development */}

        </div>
    </main>
  )
}

export default MainContainer