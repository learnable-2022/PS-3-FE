/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/Logo.svg"
import money from "../../assets/moneysend.svg"
import {AiOutlineCloseCircle} from "react-icons/ai"
import printer from "../../assets/printer.svg"
import { displaydate } from "../date"
import SuccessReceipt from "./SuccessReceipt"
import FetchTotalnetpay from "../FetchTotalnetpay"
import { setAuthToken } from "../setAuthToken";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function SuccessSlip(props) {
  const pay =() => {
    fetch('https://autopay-qv54.onrender.com/api/v1/transaction/autopay/payment', {
      method: 'GET',
      headers: {
        'Authorization': `${setAuthToken()}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response =>  response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  []};

  const componentRef = useRef();
  const handlePrint = useReactToPrint ({
    content: () => componentRef.current,
    documentTitle: 'Payment Slip/Receipt',
    onAfterPrint: () => alert('Print success')
  });
  
  
  return (
    <>
    {props.popSlip ?
        <section className={styles.back} ref={componentRef}>
          <section className={styles.container1}>
         <div className={styles.align}>
          <img src={logo} alt="logo" />
          <div className={styles.align1} onClick={props.togglePaySLip}>
            <p>close</p>
            <span><AiOutlineCloseCircle /></span>
          </div>
          </div>
        
        <div className={styles.align3}>
        <h4>Tenece employee salary payment slip</h4>
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
          <p className={styles.col}>No of employees:</p>
          <p className={styles.col1}>15</p>
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
          <div className={styles.pay} onClick= {() => {
            props.handlePayNow()
            pay()
            }}>
            <p>Pay now</p>
            <img src={money} alt="pay-icon" />
          </div>
        </div>

        </section>
        {props.showReceipt && <SuccessReceipt />}
      </section>:""}
    </>
  )
}

export default SuccessSlip;

