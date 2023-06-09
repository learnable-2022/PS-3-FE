/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PerformanceTable from "../components/tables/PerformanceTable";

function PerformanceAgreement(props) {
  return (
    <div className="flex items-center justify-center p-6">
        <div className="w-full min-h-[700px]">
            <h1 className="text-sm font-semibold text-gray-500">Performance Agreement /</h1>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">2023 Employee Performance Agreements</h3>
            <PerformanceTable data={props.data} loading={props.loading} reloadDash={props.reloadDash} />
        </div>
    </div>
  );
}

export default PerformanceAgreement;
