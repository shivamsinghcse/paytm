import axios from "axios"
import { useEffect, useState } from "react"

export default function Balance({Amount}){
    const [balance,setBalance]=useState('')
    async function fetchBalance(){
        const response = await axios.get('http://localhost:3000/api/v1/account/balance')
        console.log(response)
        setBalance(response)
    }
    useEffect(()=>{
        fetchBalance
    },[])
    return(
        <div className="font-bold m-5 ">Your Balance is ₹ {balance}</div>
        
    )
}