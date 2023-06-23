import React, { useEffect, useState } from 'react'

function GetInitials({a, b}) {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")

    
useEffect(()=>{
setFirst(a.charAt(0).toUpperCase())
setLast(b.charAt(0).toUpperCase())
},[])
  return (
    <p className='text-xs md:text-base'>{`${first} ${last}`}</p>
  )
}

export default GetInitials
