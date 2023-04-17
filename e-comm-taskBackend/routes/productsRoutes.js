import express from 'express';
import { protect } from '../controllers/userControllers.js';
import { getallProducts,getsingleProduct,newProducts } from '../controllers/productsControllers.js';

const router=express.Router();
router.route("/newproduct").post(protect,newProducts);

router.route("/all").get(getallProducts);
router.route("/single/:id").get(protect,getsingleProduct);


export default router;