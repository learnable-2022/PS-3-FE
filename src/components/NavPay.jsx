// import React from 'react'
import Logo from "../assets/images/Logo.png"
import { BsBell } from "react-icons/bs"

function NavPay() {
  return (
    <nav className="bg-white w-full h-14 z-20 shadow-md ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://www.google.com/" className="flex items-center">
                <img src={Logo} className="h-5 mr-3" alt="AutoPay Logo" />
            </a>
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
                <span className="text-lg mr-6 cursor-pointer">
                    <BsBell />
                </span>
                <button className='flex justify-center text-white text-sm items-center h-7 w-7 bg-[#5243AA] rounded-full'>
                    ON  
                </button>
            </div>
        </div>
        </nav>
        )
}

export default NavPay