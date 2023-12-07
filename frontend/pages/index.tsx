import { ConnectWallet, Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { abi } from "../constants/abi";
import { CA } from "../constants/address";
import { useState } from "react";

const Home: NextPage = () => {
 const { contract } = useContract(CA, abi);
 const [value, setValue] = useState<number>(0);
 const { data, isLoading, error } = useContractRead(
   contract,
   "value",
   [],
 );

 const getValue = () => {
   if (error) {
     console.error("Failed to read contract", error);
   }
   console.log(data);
   setValue(Number(data));
 }

 return (
   <main className={styles.main}>
     <div className={styles.container}>
       <div className={styles.connect}>
       </div>

       <div className={styles.header}>
         <h1 className={styles.title}>
           Welcome to{" "}
           <span className={styles.gradientText0}>
             the value setter dApp.
           </span>
         </h1>

         <span className={styles.last}>Value: {value}</span>
       </div>

       <div className={styles.functions}>
         <Web3Button onSuccess={() => alert("Value set successfully!")} onError={() => alert("Something went wrong!")} contractAddress={CA} contractAbi={abi} action={(contract) => contract.call("setValue", [23])}>
           Set Value
         </Web3Button>
         <button className={styles.button} onClick={getValue}>Get Value</button>
       </div>
     </div>
   </main>
 );
};

export default Home;
