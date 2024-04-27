import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Heading from "../components/Heading";
import PrimaryButton from "../components/PrimaryButton";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/inputBox";
import axios from "axios";

export default function Signin(){
    const [username, setUsername] =useState('')
    const [password,setPassword] = useState('')
    return(
        <div className="bg-slate-300  w-[100vw] h-[100vh]">
            
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] p-5 bg-white rounded-md">
        <Heading>Sign In</Heading>
        <SubHeading>Enter your credentials to access your account</SubHeading>
        <InputBox onchange={(e)=>{setUsername(e.target.value)}} label="Email" placeholder="johndoe@example.com" type="text"></InputBox>
        <InputBox onchange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder="password" type="password"></InputBox>
        <PrimaryButton onclick={()=>{
            axios.post('http://localhost:3000/api/v1/user/signin',{
                username,
                password
            })
        }}>Sign in</PrimaryButton>
        <BottomWarning text="Don't have an account?" urlName="Sign up" url='/signup'></BottomWarning>
        </div>
        </div>
    )
}