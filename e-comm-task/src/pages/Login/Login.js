import React, { useState } from "react";
import "./Login.css";
import login from "../../assets/login1.png";
import {AiOutlineMail} from "react-icons/ai"
import { Link } from "react-router-dom";
import axios from "axios";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginDetails,setLogindetails]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
setLogindetails({...loginDetails,[e.target.name]:e.target.value})
  }
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogin=async()=>{
let {data}=await axios.post("http://localhost:8000/api/v1/auth/login",loginDetails);
console.log(data)
dispatch(setUser(data))
localStorage.setItem("user",JSON.stringify(data.data));
localStorage.setItem("token",JSON.stringify(data.token));

navigate("/")
  }
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h1 style={{textAlign:"center"}}>login to your account</h1>
        <div className="form">
          <label htmlFor="email" className="width-full" >Email Address</label>
          <input type="email" name="email" value={loginDetails.email} className="width-full" placeholder="alex@gmail.com" onChange={(e)=>handleChange(e)} />

          <label htmlFor="password" className="width-full">Password</label>
          <input type="password" name="password" value={loginDetails.password} className="width-full" placeholder="Enter Your Password" onChange={(e)=>handleChange(e)} />
          <a href="/" >Forgot Password</a>

          <button onClick={handleLogin} className="width-full" style={{backgroundColor:"#024E82",color:"white"}}>Login</button>
          <hr />

          <button className="width-full" style={{display:"flex",backgroundColor:"#024E82", color:"white",justifyContent:"center",alignItems:"center"}}> <Link style={{color:"white",textDecoration:"none",margin:"auto"}} to={"/signup"}>SignUp Now</Link> </button>
        </div>
      </div>
      <div className="image">
        <img  src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
