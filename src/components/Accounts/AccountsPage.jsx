import "./web3.css";
import React, { useEffect,useState,useRef} from "react";
import abi from "./utilis/send.json";
import { ethers ,} from "ethers";
import BlockData from "./BlockData";

// const ethers = require("ethers") 
const getEthereumObject = () => window.ethereum;


const findMetaMaskAccount = async () => {
  try {
    
    const ethereum = getEthereumObject();
    /*
    * First make sure we have access to the Ethereum object.
    */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
  
};


function AccountsPage( ) {
    const [currentAccount, setCurrentAccount] = useState("");
  const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');
  const [redaddress, setRedaddress] = useState('');  
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [displayDiv, setDisplayDiv] = useState(false);
  const textRef = useRef(null);
  const [myData, setMyData] = useState([])


  const contractABI = abi.abi;
  const contractAddress = "0xFBD508Bc97F6abaCb1B70EE01414E3771A7dE78E"; 

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  
const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
   
    } catch (error) {
      console.error(error);
    }
  };

//Gets wallets addres from metamask
const getAddress = async () => {
    try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAddress(accounts[0]);
    const reducedAddress = accounts[0].substring(0,15);
    setRedaddress(reducedAddress);
    getAccountBalance(); 
    // getAllEmployees(); 
    
    
  
  } catch (error) {
    console.error(error);
  }
  
  };
   getAddress()

  const getAccountBalance = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log('Ethereum object exists');
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const signer = provider.getSigner();
        const sendContract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log('Contract instance:', sendContract);
        console.log(address)
        const balance1 = await sendContract.getBalance(address);
        console.log('Raw balance:', balance1);
        const formattedBalance = ethers.utils.formatEther(balance1);
        const mainbalance =formattedBalance.substring(0,11);
        setBalance(mainbalance.toString()); 
        console.log('Account Balance:', balance1.toString());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error('Error in getAccountBalance:', error);
    }
  };

  

  const callBatchEtherTransfer = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log('Ethereum object exists');
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract= new ethers.Contract(contractAddress, contractABI, signer);
        const transaction = await contract.sendEtherToAllEmployees()
        await transaction.sendEtherToAllEmployees();
        console.log("Success")
        // await getAllEmployees();
      }}catch (error) {
        console.error(error);
    }
  };
  
const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const sendEther = new ethers.Contract(contractAddress, contractABI, signer);
          const transaction = await  sendEther.sendEth(recipient, {
            value: ethers.utils.parseEther(amount)
          });
          await transaction.wait();}
  
      console.log('Ether sent successfully!');
      setRecipient(''); // Clear recipient input field
      setAmount(''); 
      // You can perform additional actions or show a success message to the user
    } catch (error) {
      console.error('Error sending Ether:', error);
      // Handle the error gracefully and show an error message to the user
    }
  };

  const handleClick = () => {
    setShowDiv(true);
    
  };
  const handleAdd = () => {
    setDisplayDiv(true);
    
  };
  
  const handleClose = () => {
    setShowDiv(false);
    setDisplayDiv(false)
  };

  const copyText = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;

      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('Text copied :', textToCopy);
          // You can show a success message to the user if needed
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
          // Handle the error gracefully and show an error message to the user
        });
    }
  };
  const getAllEmployees = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const employeeCount = await contract.getAllEmployees();
        console.log("Data",employeeCount)
        
        let employeecounts = [];
        employeeCount.forEach(employe => {
            employeecounts.push({
            firstName: employe.firstName,
            lastName: employe.lastName,
            grossSalary: employe.grossSalary,
            walletAddress: employe.walletAddress
            });
            });
    // const employees = [];

    //   for (let i = 0; i < employeeCount; i++) {
    //     const emp = await contract.getAllEmployees(i);
    //     employees.push({
    //       firstName: emp.firstName,
    //       lastName: emp.lastName,
    //       grossSalary: emp.grossSalary,
    //       walletAddress: emp.walletAddress
    //     });
    //   }
      
      console.log("anti",employeecounts)
        setMyData(employeecounts);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }
//   getAllEmployees();
 
  useEffect(() => {
    const fetchData = async () => {
        getAllEmployees();
       
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setCurrentAccount(account);
        console.log('Acc',account);
        
        

      }

    };
   
     fetchData();
     
  }, []);
 
  return (
  <>
  <div className="App">
      
      <div className="dataContainer">
      <div className="conn">
              {!currentAccount ? (
               
            <button type="button" className=' btn-connect' onClick={connectWallet} >Connect Wallet</button>
            ) : (
              <button className="btn-connect" onClick={null}>
              Connected
              <span className="address">{redaddress}</span>
            </button> 
            )}
            </div>
      
       
     <div className="contain">
      <div className="hd">
      <p>Available balance  </p>
         <p>* Meta Mask *</p>
      </div>
          <p className="acc">{balance}ETH</p>
        <div className="funds">
        <button className="btn" onClick={handleAdd}>Add funds</button>
          <button className="btn" onClick={handleClick}>Send funds</button>
          
        </div>
       

        

     </div>
     {showDiv &&  <div className="popup pop">
      <p> Make sure you go through list of Employees list </p>
      <p> Click on Pay to make payment  </p>

        
          <button className="btn btns" onClick={callBatchEtherTransfer}>Pay</button>
          <button className="btn btns" onClick={handleClose}>Close</button>
          </div>
       }

        {displayDiv && <div className="popup">
          <div className="pop">
          <p>To fund this account here is your Account wallet address : Goerli test network :</p>
          <p className="addr" ref={textRef} ><b >***{address}***</b></p>
          <div className="btbt">
          <button  className="btn btns" onClick={handleClose}>Close</button>
          <button className=" btn btns"onClick={copyText}>Copy</button>
          </div>
         
          </div>
          </div>}
      </div>
    
      
    </div>
    <div className="employee">
        <p className="emp">Employee List for Crypto payment</p>
        
        

        {myData.map((employe, index) => {
          return (
            <>
            {/* <p className="emp">Employee List for Crypto payment</p> */}
            <div key={index}>
              <div>Firstname{employe.Firstname}</div>
              <div>Lastname {employe.Lastname}</div>
              <div> Salary{employe.Salary}</div>
              <div>Wallet Addres {employe.walletAddress}</div>

            </div>
            </>)
        })}
    </div>
    
    
       
  </>
  )
}

export default AccountsPage