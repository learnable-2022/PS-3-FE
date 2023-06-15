import { useState, useEffect } from "react";
import { setAuthToken } from "../setAuthToken";
import 
import axios from "axios";

function Employeeno() {
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://autopay-qv54.onrender.com/api/v1/employee", {
        headers: {
          'Authorization': `${setAuthToken()}`,
        },
      });
      setItem(response.data.data);
    } catch (error) {
      console.log("Error: ", error)
    }
  };

  return (
    <>
     {item.length} 
    </>
  )
}

export default Employeeno;
