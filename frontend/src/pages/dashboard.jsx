'use client'
import axios from "axios";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { useEffect, useState } from "react";

export default function Dashboard(){
    //user list logic for users.jsx component
    const [url, setUrl] =useState('http://localhost:3000/api/v1/user/bulk')
    const [userlist,setUserlist]=useState([])
    useEffect(()=>{
    async function fetchData(){
        try{
            const response = await axios.get(url)
            const UserData = response.data.user.map(user=> user)
            setUserlist(UserData)
        }catch(error){
            console.log(error)
        }
    }
        fetchData()
        console.log(url)
    },[url])
    console.log(userlist)
    //user name logic for AppBar.jsx
    const username = 'username'
    
    
    return(
        <div>
            <AppBar userName={username}></AppBar>
            <Balance Amount='1000000'></Balance>
            <Users userlist={userlist} onchange={(e)=> setUrl(`http://localhost:3000/api/v1/user/bulk?filter=${e.target.value}`)}></Users>
        </div>
    )
} 