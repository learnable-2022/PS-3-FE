/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/Logo.svg"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {MdOutlineMail} from "react-icons/md"
import good from "../../assets/good.svg"
import printer from "../../assets/printer.svg"
import { displaydate } from "../date"
import FetchTotalnetpay from "../FetchTotalnetpay"
import { setAuthToken } from "../setAuthToken";


function SuccessReceipt(props) {
  const email = () => {
    fetch('https://autopay-qv54.onrender.com/api/v1/mail', {
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
      .then(data => {console.log(data);
      })
      .catch(error => console.error(error));
  []}; 

  const [pop, setpop] = useState(true);
  const handleOpen = () => {
  setpop(!pop);
  }
  
  return (
    <>
      <section className={styles.background}>
        {props.showReceipt ?
        <section className={styles.container}>
         
        <div className={styles.align}>
          <img src={logo} alt="logo" />
          <div className={styles.align1} onClick={props.closePopReceipt}>
            <p>close</p>
            <span><AiOutlineCloseCircle /></span>
          </div>
          </div>
        
        <div className={styles.align3}>
        <h4>Tenece employee salary payment receipt</h4>
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
          <div className={styles.print}>
            <p>Print</p>
            <img src={printer} alt="a printer" />
          </div>
          
            {pop?
          <button onClick= {() => {
            handleOpen()
            email()
            }}><span><MdOutlineMail/></span>
          Notify Employees</button>:
          <p className={styles.sent}>Emails successfully sent!</p>}
        </div>

        </section>:""}
      </section>
    </>
  )
}

export default SuccessReceipt;
