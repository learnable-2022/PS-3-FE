import React from 'react'

export default function BlockData({data}) {
  return (
    <div>
      {data.map((employee, index) => {
          return (
            <>
            <p className="emp">Employee List for Crypto payment</p>
            <div key={index}>
              <div>Firstname{employee.Firstname}</div>
              <div>Lastname {employee.Lastname}</div>
              <div> Salary{employee.Salary}</div>
              <div>Wallet Addres {employee.walletAddress}</div>

            </div>
            </>)
        })}
   
    </div>
  )
}
