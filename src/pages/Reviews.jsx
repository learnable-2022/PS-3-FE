
import React from "react";
import ReviewTable from "../components/tables/ReviewTable";

function Reviews(props) {
  return (
    <div className="flex items-center justify-center p-6">
        <div className="w-full min-h-[700px]">
            {/* <h1 className="text-sm font-semibold text-gray-500">Reviews / Monthly</h1>
            <h2 className="text-xl font-semibold mb-4">
                Monthly Review
                <span className="text-[10px] align-top bg-orange-100 font-light mx-1 px-1">Ended</span>
            </h2>
            <div className="flex flex-col  sm:flex-row gap-y-2 sm:gap-10 text-sm mb-8">
                <span>Month in Review: May, 2023</span>
                <span>Start - End Date: May 1, 2023 - May 31, 2023</span>
            </div> */}
    
            <ReviewTable 
              data={props.data} 
              loading={props.loading}
              handleEmployeeClick={props.handleEmployeeClick}
              toggleAddEmployee={props.toggleAddEmployee}/>
        </div>
    </div>
  );
}

export default Reviews;
