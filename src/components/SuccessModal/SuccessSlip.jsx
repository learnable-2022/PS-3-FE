/* eslint-disable react/prop-types */
// import { useState } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/Logo.svg"
import money from "../../assets/moneysend.svg"
import {AiOutlineCloseCircle} from "react-icons/ai"
import printer from "../../assets/printer.svg"
import { displaydate } from "../date"
import SuccessReceipt from "./SuccessReceipt"
import FetchTotalnetpay from "../FetchTotalnetpay"

function SuccessSlip(props) {
  
  return (
    <>
      <section className={styles.background}>
        {props.popSlip ?
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
          <div className={styles.print}>
            <p>Print</p>
            <img src={printer} alt="a printer" />
          </div>
          <div className={styles.pay} onClick={props.handlePayNow}>
            <p>Pay now</p>
            <img src={money} alt="pay-icon" />
          </div>
        </div>

        </section>:""}
        {props.showReceipt && <SuccessReceipt />}
      </section>
    </>
  )
}

export default SuccessSlip;

