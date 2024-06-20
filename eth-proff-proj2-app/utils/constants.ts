import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

export const client  = createThirdwebClient({
    clientId : CLIENT_ID as string
})

export const chain = defineChain(84532)

export const contractAddress = "0x4e8fc04EBC76489730FBA00f2E01B653eA256073"

export const contractABI = [
    {
      "type": "function",
      "name": "decCounter",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "incCounter",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "returnCount",
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
  ]  as const ;

  export const  CONTRACT  = getContract ({
    client : client, 
    chain : chain , 
    address :contractAddress,
    abi : contractABI
  }) ;

  