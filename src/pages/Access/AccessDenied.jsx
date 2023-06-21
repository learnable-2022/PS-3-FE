import styles from './access.module.css'
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return(
    <div className={styles.container}>
      <header></header>
      <div className={styles.align}>
   <h1>403</h1>
   <h2>Access Denied</h2>
  <p>Ooops! You currently do not have access to this page.</p>
  <p>Please contact your HR Manager for further instructions. Thank You!</p>
  <Link to="/"><button className= {styles.btn}>Go Back</button></Link>
  </div>
    </div>
  )
}

export default AccessDenied;