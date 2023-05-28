import { useState, useEffect } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/Logo.svg"
import close from "../../assets/closecircle.svg"
import money from "../../assets/moneysend.svg"
import printer from "../../assets/printer.svg"
import { displaydate } from "../date"
import SuccessReceipt from "./SuccessReceipt"
import { setAuthToken } from "../SetAuthToken";

function SuccessSlip() {
  const [pop, setpop] = useState(true)
  const closepop = () => {
  setpop(false);
  }

 const [isShown, setIsShown] = useState(false);

 const handleClick = () => {
  setIsShown(!isShown);
 }
  
 const [item, setItem] = useState([]);
 useEffect(() =>{
  fetch('https://autopay-qv54.onrender.com/api/v1/transaction/total/netsalary', {
  method: 'GET',
  headers: { 'Content-Type':'application/json',
  ...setAuthToken()},
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  });


  return (
    <>
      <section className={styles.background}>
        {pop?
        <section className={styles.container1}>
         
        <div className={styles.align}>
          <img src={logo} alt="logo" />
          <div className={styles.align1} onClick={closepop}>
            <p>close</p>
            <img src={close} alt="close-icon" />
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
          
         {item.map((p) => (
          <p className={styles.col1}>{p.totalNetSalary}</p>
          ))}
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
          <div className={styles.pay} onClick={handleClick}>
            <p>Pay now</p>
            <img src={money} alt="pay-icon" />
          </div>
        </div>

        </section>:""}
        {isShown && <SuccessReceipt />}
      </section>
    </>
  )
};

export default SuccessSlip;

