import React from "react";
import HistoryPageNav from "../HistoryPageNav";
import "./../../assets/styles/checkbox.css";
import AllCharts from "../analytics/AllCharts";

function HistorySubPage({ data, item }) {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full items-center">
        <HistoryPageNav />
      </div>
      <div className="flex flex-row gap-6">
        <AllCharts item={item} data={data} />
      </div>
    </div>
  );
}

export default HistorySubPage;
