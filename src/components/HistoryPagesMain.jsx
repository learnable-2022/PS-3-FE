import React, { useState } from "react";
import "../assets/styles/tablescroll.css";
import { useLocation } from "react-router-dom";
import ScheduleSubPage from "./SubPages/ScheduleSubPage";
import HistorySubPage from "./SubPages/HistorySubPage";
import PendingSubPage from "./SubPages/PendingSubPage";
import PaidSubPage from "./SubPages/PaidSubPages";

function HistoryPagesMain({ data, item}) {
  const location = useLocation();
  const pathname = location.pathname;
  const pageName = pathname.substring(pathname.lastIndexOf("/"));
  console.log(item);
  return (
    <main className="px-1 flex flex-col w-full h-full">
      <div className="flex flex-col w-full px-4 relative">
        <div className="min-w-full flex mt-6 mb-3">
          <h2 className="font-bold">Transactions</h2> 
        </div>

        <div className="w-full mb-6 md:mb-0 flex items-center">
          <main className="w-full">
            {pageName.includes("/schedule") ? (
              <ScheduleSubPage data={data} />
            ) : pageName.includes("/history") || pageName === "/" ? (
              <HistorySubPage />
            ) : pageName.includes("/pending") || pageName === "/" ? (
              <PendingSubPage />
            ) : (
              <PaidSubPage data={data} item={item} />
            )}
          </main>
        </div>
      </div>
    </main>
  );
}

export default HistoryPagesMain;
