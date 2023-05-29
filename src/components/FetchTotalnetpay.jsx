import { setAuthToken } from "./SetAuthToken"
import { useState, useEffect } from "react";

const Totalnetpay = () => {
  const [item, setItem] = useState({});

 useEffect(() =>{
  fetch('https://autopay-qv54.onrender.com/api/v1/transaction/total/netsalary', {
  method: 'GET',
  headers: { 'Content-Type':'application/json',
  ...setAuthToken()},
})
  .then(response => response.json())
  .then(data => setItem(data))
  .catch(error => console.error(error));
  }, []);

  return (
    <>
    {item.totalNetSalary}
    </>
  )
}

export default Totalnetpay;