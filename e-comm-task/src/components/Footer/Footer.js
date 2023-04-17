import React from "react";
import "./Footer.css";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="one">
          <p style={{ marginBottom: "10px" }}>company info</p>
          <p>About us</p>
          <p>latest posts</p>
          <p>contact us </p>
          <p>shop</p>
        </div>
        <div className="two">
          <p style={{ marginBottom: "10px" }}>help links</p>
          <p>tracking</p>
          <p>order status</p>
          <p>delivery</p>
          <p>shopping info</p>
          <p>faq</p>
        </div>
        <div className="three">
          <p style={{ marginBottom: "10px" }}>useful links</p>
          <p>special offers</p>
          <p>gift cards</p>
          <p>advertising</p>
          <p>terms of use</p>
        </div>
        <div className="four">
          <p style={{ marginBottom: "10px" }}>get in the know</p>
          <input type="email" className="emailinput" placeholder="email" />{" "}
          <span>{">"}</span>
        </div>
      </div>
      <div className="copyright">
        <div className="h" style={{ display: "flex", flexDirection: "column" }}>
          <span>@all rights reserved</span>
          <span>priveacy policy terms of service</span>
        </div>
        <div className="payment-icons">
          <span>
            <FaCcVisa />
          </span>
          <span>
            <FaCcMastercard />
          </span>
          <span>
            <FaCcPaypal />
          </span>
          <span>
            <SiVisa />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
