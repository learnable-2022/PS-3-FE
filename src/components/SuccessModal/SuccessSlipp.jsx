import React, { useState } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/images/Logo.png"
import money from "../../assets/moneysend.svg"
import {AiOutlineCloseCircle} from "react-icons/ai"
import printer from "../../assets/printer.svg"
import { displaydate } from "../date"
import SuccessReceipt from "./SuccessReceipt"
import FetchTotalnetpay from "../FetchTotalnetpay"
import AuthTokenSet from "../AuthTokenSet";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Employeeno from "./Employeeno";
import { nanoid } from 'nanoid';
import ClipLoader from "react-spinners/ClipLoader";
import LoaderMini from "../tables/LoaderMini";

function SuccessSlipp(props) {
    const nan =  nanoid()
  
    const [loading, setLoading] =useState(false);
    
  
    
    const pay = async() => {
      setLoading(!loading)
      await fetch('https://autopay-qv54.onrender.com/api/v1/transaction/autopay/payment', {
        method: 'GET',
        headers: {
          'Authorization': `${AuthTokenSet()}`,
          'Content-Type': 'application/json'
        },
        
      })
        .then(response =>  response.json())
        .then(data => data(
          props.handlePayNow()
        ))
        .catch(error => console.error(error));
    []; setLoading(false)};
  
    const componentRef = useRef();
    const handlePrint = useReactToPrint ({
      content: () => componentRef.current,
      documentTitle: 'Payment Slip/Receipt',
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
          <h4>Genesys employee salary payment slip</h4>
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
            <p className={styles.col1}><Employeeno /></p>
          </div>
  
          <div className={styles.align4}>
            <p className={styles.col}>Net salary total:</p>
            <p className={styles.col1}>NGN<FetchTotalnetpay /></p>
            </div>
  
          <div className={styles.align4}>
            <p className={styles.col}>Payment ID:</p>
            <p className={styles.col1}>{nan}</p>
          </div>
  
          <div className={styles.align5}>
            <div className={styles.print} onClick={handlePrint}>
              <p>Print</p>
              <img src={printer} alt="a printer" />
            </div>
            
            <div className={styles.pay} onClick= {pay}>
            {loading ? <LoaderMini />:<>
             <p>Pay now</p>
              <img src={money} alt="pay-icon" /> </>}
            </div>
          </div>
  
          {props.showReceipt && <SuccessReceipt />}
          </section>
          
        </section>:""}
      </>
    )
}

export default SuccessSlipp;