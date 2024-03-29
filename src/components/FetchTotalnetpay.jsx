import { useState, useEffect } from "react";
import axios from "axios";
import AuthTokenSet from "./AuthTokenSet";

function Totalnetpay() {
  const [item, setItem] = useState({});


  useEffect(() => {
    fetchNetSalary();
  }, [item.totalNetSalary]);

  const fetchNetSalary = async () => {
    // setLoading(true);
    try {
      const response = await axios.get('https://autopay-qv54.onrender.com/api/v1/transaction/total/netsalary', {
        headers: {
          'Authorization': `${AuthTokenSet()}`,
        },
      });
      setItem(response.data);

    } catch (error) {
      console.log("Error: ", error);
    }
  };
  
  // useEffect(() => {
  //   fetch('https://autopay-qv54.onrender.com/api/v1/transaction/total/netsalary', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `${setAuthToken()}`,
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then(response => {
  //       // console.log('Response status:', response.status);
  //       return response.json();
  //     })
  //     .then(data => {
  //       // console.log('Data:', data);
  //       setItem(data);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <>
      {item.totalNetSalary}
    </>
  )
}

export default Totalnetpay;
