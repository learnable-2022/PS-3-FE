
import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { BiHomeAlt } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

function SidebarBtn(props) {
  const location = useLocation();
  const isActive = location.pathname === props.location;

  return (
    <NavLink
      to={props.location}
      className={`font-semibold border-b-4 border-[#ffffff00] bg-transparent hover:bg-primary group flex h-8 my-2 w-full items-center rounded-md  py-5 ${isActive ? "border-primary" : ""}`}
    >
      <span className={`text-xl md:pl-3 lg:pl-6 bg-transparent text-[#241E4E] group-hover:text-white`}>
        {props.icon}
      </span>
      <p className={`lg:ml-3 ml-1 md:text-xs bg-transparent text-[#241E4E] group-hover:text-white `}>
        {props.title}
      </p>
    </NavLink>
  );
}

function SidebarLogoutBtn(props) {
  return (
    <button onClick={props.handleLogout} className="font-semibold bg-transparent hover:bg-[#DC3545] group flex h-8 my-2 w-full items-center py-5">
      <span className="text-xl md:pl-3 lg:pl-6 bg-transparent text-[#DC3545] group-hover:text-white">
        {props.icon}
      </span>
      <p
        className="lg:ml-3 ml-1 md:text-xs bg-transparent text-[#DC3545] group-hover:text-white"  
      >
        {props.title}
      </p>
    </button>
  );
}

function Aside({ sideBarIsOpen, sideRef }) {
  const navigate = useNavigate();

  function handleLogout() {
    // Clear token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("email");

    // Redirect user to the landing page
    navigate("/");
  }
  return (
    <div
      className={`${
        sideBarIsOpen ? "block" : "hidden"
      } md:block transition ease-in duration-300 text-white absolute w-full md:w-full h-screen min-w-[300px]`}
    >
    <div className="md:block md:w-[16%] w-[50%] shadow-lg flex flex-row fixed top-14 bottom-0 overflow-y-auto m-0 p-0">
        <div
          className="z-2 w-full h-full sm:translate-x-0 flex flex-col justify-between bg-[#F9FAFB]"
          aria-label="Sidebar"
        >
          <div className="mt-4 px-3 overflow-y-auto">
            <SidebarBtn
              icon={<BiHomeAlt />}
              title="Transactions"
              location={"/dashboard"}
            />
            <SidebarBtn 
            icon={< FaEthereum />} 
            title="Crypto Pay"
            location={"/manage"} />

            <SidebarBtn
              icon={<TbGraph />}
              title="History"
              location={"/history/summary"}/>
          </div>
          <div className="px-3 py-4 overflow-y-auto bg-transparent mb-4">
            <SidebarBtn icon={<MdErrorOutline />} title="Policies" />
            <SidebarBtn icon={<MdOutlineSettings />} title="Settings" />
            <SidebarLogoutBtn
              icon={<FiLogOut />}
              title="Log out"
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
