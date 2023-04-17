import React, { useState } from 'react'
import signup from "../../assets/signUP.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  const [signupDetails,setSignupDetails]=useState({
    email:"",
    password:"",
    phoneNo:0,
    shipping_Address:""
  })
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setSignupDetails({...signupDetails,[e.target.name]:e.target.value})
      }
  const handleSignup=async()=>{
let {data} =await axios.post("http://localhost:8000/api/v1/auth/register",signupDetails);
console.log(data.data);
setSignupDetails({
  email:"",
  password:"",
  phoneNo:0,
  shipping_Address:""
})
navigate("/login")
  }
  return (
    <div className="loginContainer">
    <div className="loginForm">
      <div className='form'>
        <label className='width-full' htmlFor="email">Email Address</label>
        <input className='width-full' onChange={(e)=>handleChange(e)} value={signupDetails.email} name='email' type="email" placeholder="alex@gmail.com" />

        <label className='width-full' htmlFor="password">Password</label>
        <input className='width-full' onChange={(e)=>handleChange(e)} value={signupDetails.password} name="password" type="password" placeholder="Enter Your Password" />

        <label className='width-full' htmlFor="password">Mobile Number</label>
        <input className='width-full' onChange={(e)=>handleChange(e)} value={signupDetails.phoneNo} name="phoneNo" type="number" placeholder="123-4567-8910" />

        <label className='width-full' htmlFor="password">Shipping Address</label>
        <input className='width-full' onChange={(e)=>handleChange(e)} value={signupDetails.shipping_Address} name="shipping_Address" type="text" placeholder="Enter your Address" />
        <button onClick={handleSignup} className='width-full' style={{backgroundColor:"#024E82",color:"white"}}>Signup Now</button>
        <hr />
      

        <button className='width-full' style={{display:"flex",backgroundColor:"#024E82", color:"white",justifyContent:"center",alignItems:"center",marginTop:"30px"}}> <Link style={{color:"white",textDecoration:"none",margin:"auto"}} to={"/login"}>Login Now</Link> </button>
      </div>
    </div>
    <div className="image">
      <img  src={signup} alt="" width={"110%"} />
    </div>
   </div>
  )
}

export default SignUp

