"use client";
import React from 'react'
import { ConnectButton, useActiveAccount } from 'thirdweb/react'
import {chain , client} from "../utils/constants"
import { computeHmac } from 'ethers'
import Counter from '../components/counter'

const Login : React.FC = () => {
    const account = useActiveAccount();
  return (
    <div style={
        {
            display: "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center" ,
            height : "50vh"
        }}>  
    {
        account ? (
            <div style={{ textAlign : "center"}}> 
            <ConnectButton
            client={client}
            chain ={chain}
            connectModal={{
               size : "compact"
           }}/>

           <Counter />
            </div>

        ) : (
            <div style={{ textAlign : "center"}}> 
            <ConnectButton
            client={client}
            chain ={chain}
            connectModal={{
               size : "compact"
           }}/>
            </div>
        )
    }


    </div>
  )
}
export default Login