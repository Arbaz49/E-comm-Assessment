import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    description: {
      type: String,
      required: true,
    },
    category: { type: String, required: true },
    image: { type: String},
    rating:{type:Number}
  },

  { timestamps: true }
);

const Product = new mongoose.model("Product", productSchema);

export default Product;
