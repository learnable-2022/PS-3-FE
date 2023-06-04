import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminAvatar from "../assets/images/adminavatar.png";
import ResourceEdgeLogo from "../assets/images/resourceedgelogo.png";
import PerformanceAgreement from "../pages/PerformanceAgreement";
import Reviews from "../pages/Reviews";

function LandingPageMain() {
  const [currentPage, setCurrentPage] = useState("performance");
  const performancehandleClick = () => {
    setCurrentPage("performance");
  };
  const reviewhandleClick = () => {
    setCurrentPage("review");
  };
  console.log(currentPage);
  return (
    <>
      <nav>
        <div className="flex flex-row justify-between items-center px-6 py-3 shadow-sm">
          <div className="flex flex-row items-center gap-4">
            <GiHamburgerMenu className="text-xl" />
            <div className="flex flex-row items-center gap-3">
              <img src={ResourceEdgeLogo} alt="" />
              <h2 className="border-l border-gray-300 px-3">
                Performance Management
              </h2>
            </div>
          </div>
          <div>
            <img src={AdminAvatar} alt="" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 px-4 pt-2 shadow">
          <div
            onClick={performancehandleClick}
            className="text-sm font-semibold py-2 border-b-[4px] border-[#ffffff00] cursor-pointer hover:text-[#0052cc] hover:border-[#0052cc]"
          >
            Performance Agreements
          </div>
          <div
            onClick={reviewhandleClick}
            className="text-sm py-2 font-semibold border-b-[4px] border-[#ffffff00] cursor-pointer hover:text-[#0052cc] hover:border-[#0052cc]"
          >
            Reviews
          </div>
        </div>
      </nav>
      <main>{currentPage == "review" ? <Reviews />  : <PerformanceAgreement />}</main>
    </>
  );
}

export default LandingPageMain;
