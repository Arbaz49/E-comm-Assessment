import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [logout,setlogout]=useState(false)
  const navigate=useNavigate();
useEffect(()=>{
let user=localStorage.getItem("user");
if(!user){
  navigate("/login")

}
},[logout])
const handleLogout=()=>{
  localStorage.removeItem("user")
  setlogout(!logout)
}
const user=useSelector((state)=>state.user.user)
  return (
    <div className="navContainer">
      <h1 className="name">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          ECloths
        </Link>
      </h1>
      <div className="menu" style={{ marginLeft: "70px" }}>
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>about</li>
          <li>contact us</li>
        </ul>
      </div>

      <div className="tools">
        <button className="orderHistory">order history</button>
        <FiUser className="user" />
        <BsBag />
        <AiOutlineMenu />
        {
          user &&
          <button className="signOut" onClick={handleLogout}>sign out</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
