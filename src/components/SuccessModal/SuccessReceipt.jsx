/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/images/Logo.png"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {MdOutlineMail} from "react-icons/md"
import good from "../../assets/good.svg"
import printer from "../../assets/printer.svg"
import { displaydate } from "../date"
import FetchTotalnetpay from "../FetchTotalnetpay"
import AuthTokenSet from "../AuthTokenSet";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from "react-router-dom";
import LoaderMini from "../tables/LoaderMini";



function SuccessReceipt(props) {
  const [loading, setLoading] =useState(false);
  
  const email = () => {
    setLoading(!loading)
    fetch('https://autopay-qv54.onrender.com/api/v1/mail', {
      method: 'GET',
      headers: {
        'Authorization': `${AuthTokenSet()}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        // console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {console.log(data)
        navigate("/history")
      })
      .catch(error => console.error(error));
  []}; 

  

  const navigate = useNavigate();
  const componentRef = useRef();
  const handlePrint = useReactToPrint ({
    content: () => componentRef.current,
    documentTitle: 'Payment Slip/Receipt',
    onAfterPrint: () => alert('Print success')
  });
  
  return (
    <>
    {props.showReceipt ?
      <section className={styles.back} ref={componentRef}>
        <section className={styles.container}>
         
        <div className={styles.align}>
          <img src={logo} alt="logo" />
          <div className={styles.align1} onClick={props.closePopReceipt}>
            <p>close</p>
            <span><AiOutlineCloseCircle /></span>
          </div>
          </div>
        
        <div className={styles.align3}>
        <h4>Genesys employee salary payment receipt</h4>
        <img src={good} alt="complete-icon"  />
        <h1>Thank you!</h1>
        <h5>Your payment was successful</h5>
        <p>We have sent you an email confirmation.</p>
        </div>

        <div className={styles.align4}>
          <p className={styles.col}>Admin name:</p>
          <p className={styles.col1}>Admin 001</p>
        </div>

        <div className={styles.align4}>
          <p className={styles.col}>Date:</p>
          <p className={styles.col1}>{displaydate}</p>
        </div>

        <div className={styles.align4}>
          <p className={styles.col}>Net salary total:</p>
          <p className={styles.col1}>NGN<FetchTotalnetpay /></p>
        </div>

        <div className={styles.align4}>
          <p className={styles.col}>Payment ID:</p>
          <p className={styles.col1}>12ndbbnd202ksl</p>
        </div>

        <div className={styles.align5}>
          <div className={styles.print} onClick={handlePrint}>
            <p>Print</p>
            <img src={printer} alt="a printer" />
          </div>
          
          <button onClick= {email}>
          {loading ? <LoaderMini />:
            <><span><MdOutlineMail/></span>
          Notify Employees</>}</button>
            
        </div>
          
        
        
      </section>
      </section>:""}
    </>
  )
}

export default SuccessReceipt;
