import { createThirdwebClient, defineChain, getContract } from "thirdweb"

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

export const client  = createThirdwebClient({
    clientId : CLIENT_ID as string
})

export const chain = defineChain(84532)

export const contractAddress = "0x0A37C7Eb2dCa83C329311eA248f52abbb2C3719E"

export const contractABI = [
  {
    "type": "function",
    "name": "addQuantity",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addUniqueItems",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "uint256",
        "name": "_price",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_quantity",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "decreaseQuantity",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getTable",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "quantity",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct MySmallGarrrage.Items[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeItems",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "totalItems",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  }
] as const ;

  export const  CONTRACT  = getContract ({
    client : client, 
    chain : chain , 
    address :contractAddress,
    abi : contractABI
  }) ;

  
