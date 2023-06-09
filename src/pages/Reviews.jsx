/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// import Search from "../components/search";
import ReviewTable from "../components/tables/ReviewTable";
// import Pagecontrol from "../components/Pagecontrol";
// import { NavLink } from "react-router-dom";
// import { FiPlus } from "react-icons/fi";

function Reviews(props) {
  return (
    <div className="flex items-center justify-center p-6">
        <div className="w-[1000px] min-h-[700px]">
            <h1 className="text-sm font-semibold text-gray-500">Reviews / Q1 Quarterly Review</h1>
            <h2 className="text-xl font-semibold mb-4">
                Q1 Quarterly Review
                <span className="text-[10px] align-top bg-orange-100 font-light mx-1 px-1">Ended</span>
            </h2>
            <p className="text-sm mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, earum cumque perferendis tempore molestiae eius odio dolorum quibusdam illo modi quos. Autem blanditiis corrupti libero debitis beatae reprehenderit quae sint consequatur vero atque veritatis esse saepe quos voluptatibus laboriosam alias animi, aut, fugiat exercitationem ratione quod perferendis.</p>
            <div className="flex flex-row gap-10 text-sm mb-8">
                <span>Period in Review: April 1, 2023 - July 31, 2023</span>
                <span>Start - End Date: May 1, 2023 - June 1, 2023</span>
            </div>
            {/* <div className="flex flex-row items-center justify-between">
              <Search data={props.data} />
              <div className="flex justify-end items-center w-full">
              <button 
                onClick={() => props.toggleAddEmployee()}
                className="bg-primary hover:bg-primaryHover rounded text-white py-2 text-sm px-4 flex items-start justify-center">
                <span className="mt-[2px] text-base font-bold mr-1"><FiPlus /></span> 
                Add Employee
              </button>
              <NavLink to={"/dashboard"} onClick={props.reloadDash} className="rounded ml-14 bg-primary hover:bg-primaryHover text-white py-2 text-sm px-4">Payroll</NavLink>
            </div>
            </div> */}
            <ReviewTable 
              data={props.data} 
              loading={props.loading}
              handleEmployeeClick={props.handleEmployeeClick} 
              reloadDash={props.reloadDash}
              toggleAddEmployee={props.toggleAddEmployee}/>
            {/* <Pagecontrol /> */}
        </div>
    </div>
  );
}

export default Reviews;
