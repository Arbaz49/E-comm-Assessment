import React, { useEffect, useState } from 'react'
import "./Products.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import productImg from "../../assets/product.jpg"
const Products = () => {
  const[products,setProducts]=useState([]);

  useEffect(()=>{
    const getdata=async()=>{
      const {data}=await axios.get("http://localhost:8000/products/all");
      console.log(data.data)
      setProducts(data.data);
        }
    getdata();
  },[])
  return (
    <div className='products' id='products'>
      <div className="hedings" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{fontFamily: 'Arimo'}}>

      Discover NEW Arrivals
        </h1>
        <p>Recently added shirts!</p>
      </div>
      <div className="productContainer">
     

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{
  products.map((product)=>{
    return (
      <div className="card" style={{width: "289px"}}>
  <img src={productImg} alt="..."/>
  <div className="card-body" style={{background: "rgba(229, 226, 226, 0.5)",display:"flex",flexDirection:"column"}}>
    <h5 className="card-title text-center">{product.title}</h5>
    <Link to={`/products/${product._id}`} className="card-text text-center product-price" >${product.price}</Link>
  </div>
</div>
    )
  })
}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}

{/* <div className="card" style={{width: "289px"}}>
  <img src="..." className="card-img-top w-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">product name</h5>
    <p className="card-text">price</p>
  </div>
</div> */}
      </div>
      
    </div>
  )
}

export default Products
