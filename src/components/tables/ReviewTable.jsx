
import React, {useState} from "react";
import {FiEdit} from 'react-icons/fi'
import {CiSearch} from 'react-icons/ci'
import {BiUserPlus} from 'react-icons/bi'
import GetInitials from "./GetInitials";
import Loader from "./Loader";


function ReviewTable(props) {
    const [searchText, setSearchText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const departments = props.data ? Array.from(new Set(props.data.map(item => item.department))) : null;
  const employeeData = props.data ? props.data.filter((employee) => employee.department.includes(selectedValue)) : null;

  const handleSearchName = (event) => {
    setSearchText(event)
  };

  const empLength = props.data ? props.data.length : 0;
  const handleSelectChange = (event) => {
    if (event == 'all') {
      setSelectedValue("")
    } else {
      setSelectedValue(event)
    }
  };

const filteredNames = employeeData
  ? employeeData.filter((employee) => {
      const searchTextLowerCase = searchText.toLowerCase();
      const firstNameLowerCase = employee.firstName.toLowerCase();
      const lastNameLowerCase = employee.lastName.toLowerCase();
      const employeeIdString = employee.employeeId.toString();

      return (
        firstNameLowerCase.includes(searchTextLowerCase) ||
        lastNameLowerCase.includes(searchTextLowerCase) ||
        employeeIdString.includes(searchTextLowerCase)
      );
    })
  : [];

  return (
    <div className="flex flex-col ">
        <div className="flex flex-row items-center justify-between">
            {/* <Search data={props.data} /> */}
            <section className="flex flex-row sm:gap-3 gap-2">
                <div className="flex flex-row items-center justify-center border border-gray-400 px-2 py-2 rounded">
                    <input
                    type="search"
                    placeholder="search"
                    onChange={(event) => handleSearchName(event.target.value)}
                    className="outline-none text-xs w-20 sm:w-44"
                    />
                    <CiSearch />
                </div>
               
                <div>
                    <select 
                        value={selectedValue} 
                        onChange={(event) => handleSelectChange(event.target.value)}
                        className="w-24 sm:w-36 sm:px-2 bg-gray-100 h-full outline-none rounded text-sm py-2 focus:outline-none focus:border-gray-500" 
                        id="grid-state"
                    >
                        <option value='all'>All Departments</option>
                        {departments ? (
                        departments.map((items, index) => (
                            <option value={items} key={index}>{items}</option>
                        ))
                        
                        ) : (
                        <option>...</option>
                        )}
                    </select>
                </div>
            </section>
            <div className="flex justify-end items-center w-full">
                <span 
                onClick={() => props.toggleAddEmployee()}
                className="h-9 border border-[#0052CC] rounded text-[#0052CC] font-bold hover:text-white hover:bg-[#0052CC] py-2 text-sm px-1 sm:px-2 flex items-center justify-center">
                <span className="text-xl font-bold mr-1"><BiUserPlus /></span> 
                Add <span className="hidden sm:block ml-1"> Employee</span>
                </span>
                
            </div>
        </div>
        
        <div className="hidden md:block">
            <div className="overflow-x-auto overflow-hidden flex flex-col ">
                <table className="mt-8 w-full border-2 border-gray-100 ">
                    <thead className="w-full">
                        <tr className="text-left border-b">
                            <th colSpan={4} className="px-5 text-xl py-3">Employee Review (<span className="text-[#0052CC]">{empLength}</span>)</th>
                        </tr>
                        <tr className="text-gray-400 text-left border-b text-sm">
                            <th className="py-3 font-medium px-5">Employee Id</th>
                            <th className="py-3 font-medium px-5">Full Name & Email</th>
                            <th className="py-3 font-medium px-5">Department</th>
                            <th className="py-3 font-medium px-5">Performance</th>
                            <th className="py-3 font-medium px-5 ">Edit/Delete Emp.</th> 
                        </tr>
                    </thead >
                    <tbody className="w-full">
                        { props.loading ? 
                            <tr>
                            <td colSpan={5} className="px-6 py-3 font-medium text-center text-gray-900">
                                <Loader />
                            </td>
                        </tr>
                            :
                            filteredNames.length !== 0 ? (
                                filteredNames.map(dets => (
                                    <tr key={dets.employeeId} className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                            <td className="py-3 font-semibold px-5">{dets.employeeId}</td>
                            <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                                <span className="w-10 h-10 rounded-full border-2 border-green-500 bg-[#0052CC] flex justify-center items-center text-white">
                                    <GetInitials a={dets.firstName} b={dets.lastName} />
                                </span>
                                <div className="flex flex-col">
                                    <span>{`${dets.firstName} ${dets.lastName}`}</span>
                                    <span className="text-sm text-gray-400">{dets.email}</span>
                                </div>
                            </td>
                            <td className="py-3 font-semibold px-5">{dets.department}</td>
                            <td className="py-3 font-semibold px-5">{dets.performance}</td>
                            <td className="py-3 font-semibold px-5">
                            <button 
                                onClick={() => props.handleEmployeeClick(dets.employeeId)}
                                className="bg-transparent hover:bg-[#0052CC] hover:text-white py-1 text-[#0052CC] px-2 flex items-start justify-center rounded-md">
                                <span className="mt-[2px] text-sm mr-1"><FiEdit /></span>
                                Edit
                            </button>
                            </td>                       
                        </tr>
                                )
                            )) : (
                                <tr>
                            <td colSpan={5} className="px-6 py-4 font-medium text-center text-gray-900">No item found.</td>
                        </tr>
                            )
                        }
                        
                    </tbody>
                </table> 
            </div>

        </div>
        <section className="mt-8 w-full border-2 border-gray-100 md:hidden">
            
            <div className="border-b text-center py-2">
                <span className="px-5 text-xl">Employee Review (<span className="text-[#0052CC]">{empLength}</span>)</span>
            </div> 
            <div>
                { props.loading ? 
                <div>
                    <span className="px-6 py-3 font-medium text-center text-gray-900">
                        <Loader />
                    </span>
                </div>
                    :
                    filteredNames.length !== 0 ? (
                        filteredNames.map(dets => (
                    <div key={dets.employeeId} onClick={() => props.handleEmployeeClick(dets.employeeId)} className=" flex justify-between items-center text-left border-b text-sm sm:text-base sm:px-5 cursor-pointer hover:bg-slate-100" >
                        <div className="py-3 px-1 flex flex-col gap-3">
                            <span className="flex justify-start items-center  ">
                                <span className="w-7 h-7 rounded-full border-2 border-green-500 bg-[#0052CC] flex justify-center items-center text-white">
                                    <GetInitials a={dets.firstName} b={dets.lastName} />
                                </span>
                                <span className="flex flex-col text-xs ml-1">
                                    <span className="text-sm sm:text-base">
                                        {`${dets.firstName} ${dets.lastName}`} 
                                        <span className="ml-2 text-[#4D5154]">
                                            | ID#: <span className="font-bold text-[#0052CC] ">
                                                {dets.employeeId}
                                                </span>
                                        </span>
                                    </span> 
                                    <span className="text-xs text-gray-400">{dets.email}</span>
                                </span>
                            </span>
                            <span className="flex items-center">
                                
                                <span className="py-1 text-[#4D5154]">Dept.: <span className="font-bold text-[#4D5154]">{dets.department}</span></span>
                                <span className="py-1 pl-2 text-[#4D5154]">Performance: <span className="font-bold text-[#4D5154]">{dets.performance}</span></span>
                            </span>
                        </div>
                        <div>
                            <span className="py-3 font-semibold">
                                <span 
                                    className="bg-transparent text-[#4D5154] px-[2px]">
                                    ₦{dets.grossSalary}
                                </span>
                            </span>                

                        </div>
                    </div>
                        )
                    )) : (
                        <div>
                    <span className="px-6 py-4 font-medium text-center text-gray-900">No item found.</span>
                </div>
                    )
                }
                
            </div>
        </section> 
    </div>
  );
}

export default ReviewTable;
