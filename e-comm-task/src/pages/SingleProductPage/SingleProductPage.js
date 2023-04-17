import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./singlepage.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addTocart } from '../../store/cartSlice'
const SingleProductPage = () => {
  const [product,setProduct]=useState({});
  const {id} =useParams();
  let token=JSON.parse(localStorage.getItem("token"));
  console.log(token)
  useEffect(()=>{
const getSingleproduct=async(id)=>{
let {data}=await axios.get(`http://localhost:8000/products/single/${id}`,{ 'headers': { 'token':`Bearer ${token}` } });
console.log(data)
setProduct(data.data);

}
getSingleproduct(id);
  },[])
const dispatch=useDispatch()
  const handleAddtoCart=()=>{
dispatch(addTocart(product))
  }
  return (
    <div>
      <Navbar/>
      <div className="product">
        <div className="leftimage">
          <div className="images">
            {/* {imagesArry.map((image, index) => {
              return (
                <img
                  key={index}
                  src={"image"}
                  className="productImage"
                  onClick={() => setimage(index)}
                  alt="img"
                />
              );
            })} */}
          </div>

          <div className="mainimage">
            <div>
              <img  src={"https://img.freepik.com/free-psd/isolated-black-t-shirt-front_125540-1167.jpg"} alt="large" className="large" />
            </div>
           
          </div>
        </div>

        <div className="productdetails">
      <h4><Link style={{fontFamily: 'Arimo',color: "#888888"}} to="/">Home</Link>{window.location.pathname} </h4>

          <h1 >{product.title}</h1>
         <span className="price"> <s>$58.00</s> ${product.price}</span>
         <p>{product.description}</p>
         <select name="size" id="size" style={{width:"100px"}}>
         <option value="select size" > Select size</option>

            <option value="small"> Small S</option>
            <option value="medium"> Medium m</option>
            <option value="large"> Large L</option>
            <option value="extra large"> Extra Large XL</option>

         </select>

      <button  className="btn btn-primary addBtn" onClick={handleAddtoCart}> <Link style={{textDecoration:"none",color:"white"}} to={"/cart"}>Add to Cart</Link> </button>

      <div className="otherInfo">
        <span>Category: {product.category}</span>
        <span>Tag : T-shirt,Women,Top,Men</span>
       
      </div>
        </div>
       
      </div>
      <div className="decri">
        <div className="tabs" style={{marginLeft:"30px",gap:"10px",display:"flex"}}>
            <button>Description</button>
            <button>reviews (0)</button>
        </div>
        <div style={{padding:"2%"}}>
            <p>A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. 
</p>
<p>
    
Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience. </p>
        </div>
        </div>
    </div>
  )
}

export default SingleProductPage
