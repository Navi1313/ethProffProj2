"use client";
import React from 'react'
import { TransactionButton, useReadContract } from 'thirdweb/react';
import { CONTRACT } from '../utils/constants';
import { prepareContractCall } from 'thirdweb';

const Counter  = () => {
    const { data: count, isLoading: loadingCount , refetch} = useReadContract({
        contract: CONTRACT,
        method: "returnCount"
    });

    return (
        <div style={{
             margin: "30px", 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' }}>
            <h1>Counter</h1>
            {loadingCount ? (
                <h6>Loading...</h6>
            ) : (
                <h2>{count?.toString()}</h2>
            )}
            <div style={{margin: "30px"}}> <p>
-----------------------------------------------------</p>
            </div>

<div style={{ 
              display: 'flex', 
              justifyContent : "center",
              gap:"20px", 
              marginTop:"10px",
              marginBottom:"20px"
              }}>
                <TransactionButton
                transaction={() => prepareContractCall({
                    contract : CONTRACT,
                    method : "decCounter"
                })}
                onTransactionSent={console.log("decrementing...")}
                onTransactionConfirmed={() =>refetch()}
                > - </TransactionButton>

                <TransactionButton
                transaction= {()=>prepareContractCall({
                    contract : CONTRACT,
                    method : "incCounter"
                })}
                onTransactionSent={console.log("incrementing...")}
                onTransactionConfirmed={() =>refetch()}
                > + </TransactionButton>
            
            </div>
        </div>
    );
};

export default Counter;
