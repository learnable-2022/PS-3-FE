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
        <div className="w-full min-h-[700px]">
            <h1 className="text-sm font-semibold text-gray-500">Reviews / Q1 Quarterly Review</h1>
            <h2 className="text-xl font-semibold mb-4">
                Q1 Quarterly Review
                <span className="text-[10px] align-top bg-orange-100 font-light mx-1 px-1">Ended</span>
            </h2>
            {/* <p className="text-sm mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, earum cumque perferendis tempore molestiae eius odio dolorum quibusdam illo modi quos. Autem blanditiis corrupti libero debitis beatae reprehenderit quae sint consequatur vero atque veritatis esse saepe quos voluptatibus laboriosam alias animi, aut, fugiat exercitationem ratione quod perferendis.</p> */}
            <div className="flex flex-col  sm:flex-row gap-y-2 sm:gap-10 text-sm mb-8">
                <span>Period in Review: April 1, 2023 - July 31, 2023</span>
                <span>Start - End Date: May 1, 2023 - June 1, 2023</span>
            </div>
    
            <ReviewTable 
              data={props.data} 
              loading={props.loading}
              handleEmployeeClick={props.handleEmployeeClick} 
              
              toggleAddEmployee={props.toggleAddEmployee}/>
            {/* <Pagecontrol /> */}
        </div>
    </div>
  );
}

export default Reviews;
