import React, { useState, useEffect } from 'react'
import MainContentContainer from './components/MainContentContainer'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://autopay-qv54.onrender.com/api/v1/transaction");
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className=' max-h-screen max-w-screen-sm'>
      <MainContentContainer data={data} />
    </section>
    </>
  )
}

export default App
