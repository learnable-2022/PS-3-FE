/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function GetInitials({a, b}) {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")

    
useEffect(()=>{
setFirst(a.charAt(0))
setLast(b.charAt(0))
},[])
  return (
    <p>{`${first} ${last}`}</p>
  )
}

export default GetInitials
