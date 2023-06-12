// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MoonLoader } from "react-spinners";

function LoaderMini() {
  return (
    <span className="flex justify-center items-center">
        <MoonLoader color="white" size={14} />
    </span>
  )
}

export default LoaderMini