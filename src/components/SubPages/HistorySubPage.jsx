/* eslint-disable no-unused-vars */
import React from "react";
import HistoryPageNav from "../HistoryPageNav";
import { RiSearchLine } from "react-icons/ri";
import "./../../assets/styles/checkbox.css";
import AllCharts from "../analytics/AllCharts";

function HistorySubPage() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full items-center">
        <HistoryPageNav />
      </div>
      <div className="flex flex-row gap-6">
        <AllCharts />
      </div>
    </div>
  );
}

export default HistorySubPage;
