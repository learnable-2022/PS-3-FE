// eslint-disable-next-line no-unused-vars
import React from "react";
import Search from "../components/search";
import PerformanceTable from "../components/tables/PerformanceTable";
// import Pagecontrol from "../components/Pagecontrol"

// eslint-disable-next-line react/prop-types
function PerformanceAgreement(props) {
  return (
    <div className="flex items-center justify-center p-6">
        <div className="w-[1100px] h-[700px]">
            <h1 className="text-sm font-semibold text-gray-500">Performance Agreement /</h1>
            <h2 className="text-xl font-semibold mb-4">2023 Employee Performance Agreements</h2>
            {/* <Search /> */}
            <PerformanceTable data={props.data} loading={props.loading} />
            {/* <Pagecontrol /> */}
        </div>
    </div>
  );
}

export default PerformanceAgreement;
