import React, { useEffect, useState } from 'react'
import Logo from "../assets/images/Logo.png";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavPay({ sideBarIsOpen, setSideBarIsOpen, sideRef }) {
  const [first, setFirst] = useState(localStorage.getItem('firstname'))
  const [last, setLast] = useState(localStorage.getItem('lastname'))

    
useEffect(()=>{
setFirst(first.charAt(0).toUpperCase())
setLast(last.charAt(0).toUpperCase())
},[])

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };
  return (
    <nav className="bg-white w-full h-17 z-20 shadow-md fixed">
      <div className="max-w-[1350px] flex md:flex-wrap items-center justify-between mx-auto py-4 md:px-2">
        <button
          className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 pl-4 md:hidden"
          onClick={toggleSidebar}
          ref={sideRef}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {sideBarIsOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <Link to="/dashboard" className="flex items-center">
          <img src={Logo} className="h-5" alt="AutoPay Logo" />
        </Link>
        <div className="flex flex-row items-center justify-between w-fit md:flex md:w-auto md:order-1">
          <span className="text-lg mr-6 cursor-pointer">
            <BsBell />
          </span>
          <span className="justify-center text-white text-sm font-bold items-center hidden md:flex h-7 w-7 bg-[#5243AA] rounded-full">
          {`${first} ${last}`}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavPay;
