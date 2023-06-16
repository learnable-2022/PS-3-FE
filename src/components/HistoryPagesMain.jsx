import React, { useState } from "react";
import "../assets/styles/tablescroll.css";
import { useLocation } from "react-router-dom";
import HistorySubPage from "./SubPages/HistorySubPage";
import PendingSubPage from "./SubPages/PendingSubPage";
import PaidSubPage from "./SubPages/PaidSubPages";

function HistoryPagesMain({ data, item }) {
  const location = useLocation();
  const pathname = location.pathname;
  const pageName = pathname.substring(pathname.lastIndexOf("/"));
  return (
    <main className="px-1 flex flex-col w-full h-full overflow-x-hidden">
      <div className="flex flex-col w-full px-4 h-full">
        <div className="min-w-full flex mt-6 mb-3">
          <h2 className="font-bold text-primary">Transactions History</h2>
        </div>

        <div className="w-full mb-6 md:mb-0 h-full flex items-center">
          <main className="w-full h-full">
            {pageName.includes("/paid") ? (
              <PaidSubPage item={item} />
            ) : pageName.includes("/pending") ? (
              <PendingSubPage item={item} />
            ) : (
              <HistorySubPage item={item} data={data} />
            )}
          </main>
        </div>
      </div>
    </main>
  );
}

export default HistoryPagesMain;
