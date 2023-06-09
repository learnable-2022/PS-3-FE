// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MoonLoader } from "react-spinners";

function Loader() {
  return (
    <span className="flex justify-center items-center ">
        <MoonLoader color="#422FC6" size={40} />
    </span>
  )
}

export default Loader