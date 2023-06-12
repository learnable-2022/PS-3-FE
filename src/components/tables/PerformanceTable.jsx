/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {CiSearch} from 'react-icons/ci'
import GetInitials from "./GetInitials";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

function PerformanceTable(props) {
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

        const empLength = props.data ? props.data.length : 0;
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
                <section className="flex flex-row gap-3">
                    <div className="flex flex-row items-center justify-center border border-gray-400 px-2 py-2 rounded">
                        <input
                        type="search"
                        placeholder="search"
                        onChange={(event) => handleSearchName(event.target.value)}
                        className="outline-none text-xs w-24 sm:w-40"
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
                            <option value='all'>All Employees</option>
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
                <NavLink 
                    to={"/dashboard"} 
                    onClick={() => {
                        props.reloadDash();
                        
                      }}
                    className="rounded ml-2 bg-primary hover:bg-primaryHover text-white py-2 text-sm px-2 sm:px-4">
                        Payroll
                </NavLink>
            </div>
            <div className="overflow-x-auto overflow-hidden">
                <table className="mt-8 w-full border-2 border-gray-100">
                    <thead>
                        <tr className="text-left border-b">
                            <th colSpan={4} className="px-5 text-xl py-3">Performance Agreements (<span className="text-primary">{empLength}</span>)</th>
                        </tr>
                        <tr className="text-gray-400 text-left border-b  text-sm">
                            <th className="py-3 font-medium px-5">Employee Id</th>
                            <th className="py-3 font-medium px-5">Full Name</th>
                            <th className="py-3 font-medium px-5">Department</th>
                            <th className="py-3 font-medium px-5">EPA Reviewer</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {props.loading ? 
                        <tr>
                        <td colSpan={4} className="px-6 py-4 font-medium text-center text-gray-900">
                            <Loader sizenum={40}/>
                        </td>
                    </tr>
                        :  
                    filteredNames.length !== 0 ? (
                            filteredNames.map(dets => (

                        <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" key={dets.employeeId} >
                            <td className="py-3 font-semibold px-5">{dets.employeeId}</td>
                            <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary flex justify-center items-center text-white">
                                <GetInitials a={dets.firstName} b={dets.lastName} />
                                </span>
                                <div className="flex flex-col">
                                    <span>{`${dets.firstName} ${dets.lastName}`}</span>
                                    <span className="text-sm text-gray-400">{dets.email}</span>
                                </div>
                            </td>
                            <td className="py-3 font-semibold px-5">{dets.department}</td> 
                            <td className="py-3 font-semibold px-5">Ositadinma Nwangwu</td> 
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={4} className="px-6 py-4 font-medium text-center text-gray-900">No item found.</td>
                        </tr>
                    )} 
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PerformanceTable;
