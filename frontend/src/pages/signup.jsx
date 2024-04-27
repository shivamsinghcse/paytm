import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Heading from "../components/Heading";
import PrimaryButton from "../components/PrimaryButton";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/inputBox";
import axios from "axios";
export default function Signup(){
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className="bg-slate-300  w-[100vw] h-[100vh]">
            
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] p-5 bg-white rounded-md">
            <Heading >Signup</Heading>
            <SubHeading>Enter you Information to create an account</SubHeading>
            <InputBox onchange={(e)=>setFirstname(e.target.value)} label="First Name" placeholder="John" type='text'></InputBox>
            <InputBox onchange={(e)=>setLastname(e.target.value)} label="Last Name" placeholder="Doe" type='text'></InputBox>
            <InputBox onchange={(e)=>setUsername(e.target.value)} label="Email" placeholder="John@gmail.com" type='email'></InputBox>
            <InputBox onchange={(e)=>setPassword(e.target.value)} label="Password" placeholder="password" type='password'></InputBox>
            <PrimaryButton onclick={async ()=>{
               const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    firstName,
                    lastName,
                    username,
                    password
                })
                localStorage.setItem("token", response.data.token)
                
            }}>Signup</PrimaryButton>
            <BottomWarning text="Already have account?" url='/signin' urlName='Sign In'></BottomWarning>
        </div>
        </div>
    )
}