import React, { useState } from "react";
import "./CartPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const CartPage = () => {
  const cart=useSelector((state)=>state.cart.cart);
    const[quantity,setQuantity]=useState(1);
    const handleAdd=()=>{
        if(quantity<3){

            setQuantity(quantity+1);
        }
    }
    const handleRemove=()=>{
        if(quantity>1){

            setQuantity(quantity-1);
        }
    }
    const handleCheckout=()=>{
      toast.success("ORDER PLACED SUCCESSFULLY")
    }
  return (
    <div>
      <Navbar />
      <h4><Link style={{fontFamily: 'Arimo',color: "#888888",marginLeft:"50px"}} to="/">Home</Link>{window.location.pathname} </h4>

      <div className="orderTable" style={{ marginTop: "70px" }}>
        <table className="table">
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <img
                src={cart.image || "https://img.freepik.com/free-psd/isolated-black-t-shirt-front_125540-1167.jpg"}
                alt="hsb"
                width={"50px"}
                height={"50px"}
              />
            </td>
            <td>Alfreds Futterkiste</td>
            <td>${cart?.price}</td>
            <td >
                <div className="quantity">

              <button onClick={handleRemove}>-</button>
              {quantity}
              <button onClick={handleAdd}>+</button>
                </div>
            </td>
            <td>${cart.price * quantity}</td>
          </tr>
        </table>
      </div>

      <div className="order">
        <h1>Cart Totals</h1>
        <p>
          subtotal <span>${cart.price * quantity}</span>
        </p>
        <hr />
        <p>
          Shipping fee <span>FREE</span>
        </p>
        <hr />
        <p>
          <b> subtotal</b> <span>${cart.price * quantity}</span>
        </p>

        <button
          style={{
            backgroundColor: "#FD7401",
            color: "white",
            fontSize: "20px",
            padding: "3px",
            border: "none",
          }}
          onClick={handleCheckout}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
      <Footer />
      <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
    </div>
  );
};

export default CartPage;
