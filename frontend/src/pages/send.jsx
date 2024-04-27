import { useSearchParams } from "react-router-dom";
import ButtonGreen from "../components/ButtonGreen";
import Heading from "../components/Heading";
import UserName from "../components/UserName";
import InputBox from "../components/inputBox";
import axios from "axios";
import { useState } from "react";

export default function Send() {
  const [params] = useSearchParams();
  const firstName = params.get("name");
  const [amount, setAmount] = useState(0);
  const id = params.get("id");
 async function InitiateTransfer(){
  console.log(id)
let stringWithoutWhiteSpace = id.replace(/\s/g, '');
console.log(stringWithoutWhiteSpace); // Output: "Hello,World!"

  await axios.post('http://localhost:3000/api/v1/account/transfer',{
    to: stringWithoutWhiteSpace,
    amount
  },{
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
)
 }
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-300">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] p-5 bg-white rounded-md">
        <div className="my-12">
          <Heading>Send Money</Heading>
        </div>
        <div className="my-3">
          <UserName username={firstName}></UserName>
        </div>
        <InputBox
          label="Amount (in Rs)"
          onchange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        ></InputBox>
        <ButtonGreen onclick={InitiateTransfer}>Initiate Transfer</ButtonGreen>
      </div>
    </div>
  );
}
