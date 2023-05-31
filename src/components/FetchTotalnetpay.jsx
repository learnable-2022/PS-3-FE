import { useState, useEffect } from "react";
import { setAuthToken } from "./setAuthToken";

function Totalnetpay() {
  const [item, setItem] = useState({});
  
  useEffect(() => {
    fetch('https://autopay-qv54.onrender.com/api/v1/transaction/total/netsalary', {
      method: 'GET',
      headers: {
        'Authorization': `${setAuthToken()}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        // console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        // console.log('Data:', data);
        setItem(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {item.totalNetSalary}
    </>
  )
}

export default Totalnetpay;
