import React from "react";
import "./Feature.css";
import { FaShippingFast } from "react-icons/fa";
import {HiOutlineSupport} from "react-icons/hi";
import {VscRefresh} from "react-icons/vsc";
import {HiOutlineFingerPrint} from "react-icons/hi"
const Feature = () => {
  return (
    <div className="feature">
      <div className="boxes">
        <div className="box">
          <span>
            <FaShippingFast style={{ fontSize: "25px",color:" #024E82",marginRight:"8px" }} />
          </span>
          <div>
            <h4>free shipping</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
        </div>
        <div className="box">
          <span>
            <HiOutlineSupport style={{ fontSize: "25px",color:" #024E82",marginRight:"8px" }} />
          </span>
          <div>
            <h4>Support 24/7</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
        </div> <div className="box">
          <span>
            <VscRefresh style={{ fontSize: "25px",color:" #024E82",marginRight:"8px" }} />
          </span>
          <div>
            <h4>30 Days Return</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
        </div> <div className="box">
          <span>
            <HiOutlineFingerPrint style={{ fontSize: "25px",color:" #024E82",marginRight:"8px" }} />
          </span>
          <div>
            <h4>free shipping</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
        </div>
      

      
      </div>
      <div className="Offers">
          <div className="leftBox">
            <div style={{width:"350px"}}>
                <h1 style={{textAlign:"center"}}>PEACE OF MIND</h1>
                <p>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
                <div style={{display:"flex",justifyContent:"center",width:"100%"}}>

<button style={{padding:"10px",marginTop:"20px",color:" #024E82"}}>BUY NOW</button>
</div>
            </div>
          </div>
          <div className="rightBox">
          <div style={{width:"350px"}}>
                <h1 style={{textAlign:"center"}}>Buy 2 Get 1 Free</h1>
                <p>End of season sale. Buy any 2 items of your choice and get 1 free..</p>
                <div style={{display:"flex",justifyContent:"center",width:"100%"}}>

                <button style={{padding:"10px",marginTop:"20px",color:" #024E82"}}>BUY NOW</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Feature;
