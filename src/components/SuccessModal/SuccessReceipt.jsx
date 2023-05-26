import { useState, useEffect } from "react";
import styles from "./successmodal.module.css"
import logo from "../../assets/Logo.svg"
import close from "../../assets/closecircle.svg"
import good from "../../assets/good.svg"
import printer from "../../assets/printer.svg"

function SuccessReceipt() {
  const [pop, setpop] = useState(true)
  const closepop = () => {
  setpop(false);
  }

  const [data, setData] = useState(null);

  useEffect(() =>{
    fetch("https://autopay-qv54.onrender.com/api/v1/transaction/total/netsalary")
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
    });

    const showdate= new Date();
    const displaydate= showdate.getDate()+'th,'+'May'+','+showdate.getFullYear();

  return (
    <>
      <section className={styles.background}>
        {pop?
        <section className={styles.container}>
         
        <div className={styles.align}>
          <img src={logo} alt="logo" />
          <div className={styles.align1} onClick={closepop}>
            <p>close</p>
            <img src={close} alt="close-icon" />
          </div>
          </div>
        
        <div className={styles.align3}>
        <h4>Tenece employee salary payment receipt</h4>
        <img src={good} alt="complete-icon" />
        <h1>Thank you!</h1>
        <h5>Your payment is successful</h5>
        <p>we've sent you an email confirmation.</p>
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
          <p className={styles.col1}>{JSON.stringify(data, null)}</p>
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
          <button>Continue</button>
        </div>

        </section>:""}
      </section>
    </>
  )
};

export default SuccessReceipt;
