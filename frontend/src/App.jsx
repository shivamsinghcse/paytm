import { BrowserRouter, Routes,Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Send from "./pages/send";
import Dashboard from "./pages/dashboard";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/send" element={<Send/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}