import Product from "../models/productsModel.js";
import catchErrorAsync from "../utils/catchErrorAsync.js";

const getallProducts=catchErrorAsync(async(req,res,next)=>{
    const products=await Product.find();
    res.status(200).json({
        message: "success",
        total: products.length,
        data: products,
      });
  
})

const getsingleProduct=catchErrorAsync(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: product,
    });
})

const newProducts=catchErrorAsync(async(req,res,next)=>{
    const { title,image,description,category,price,rating } = req.body;
    const product = await Product.create({
        title,image,description,category,price,rating
    });
    res.status(201).json({
      message: "success",
      data: product,
    });
})

export {getallProducts,getsingleProduct,newProducts}