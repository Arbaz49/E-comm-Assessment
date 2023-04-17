import express from 'express';
import  {getSingleUser, getUsers, Login, protect, Register} from "../controllers/userControllers.js"

const router=express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/allusers").get(getUsers);
router.route("/user/:id").post(protect,getSingleUser);


export default router
