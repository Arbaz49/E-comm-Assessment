import UserModel from "../models/userModel.js";
import catchErrorAsync from "../utils/catchErrorAsync.js";
import apiErrorsModel from "../utils/clientErrorsController.js";
import { verifyToken } from "../utils/verifyToken.js";
import { tokenCreation } from "../utils/tokencreation.js";
import jwt from "jsonwebtoken";
//REGISTER
const Register = catchErrorAsync(async (req, res, next) => {
  const { name, email, isAdmin, password, phoneNo, bio } = req.body;
  const user = await UserModel.create({
    name,
    email,
    password,
    phoneNo,
    bio,
  });
  res.status(201).json({
    message: "success",
    data: user,
  });
});

//PRTOECT
const protect = catchErrorAsync(async (req, res, next) => {
  // console.log(req.headers.token);
  let authToken = "";
  if (req.headers?.token?.startsWith("Bearer ")) {
    authToken = req.headers?.token.split(" ")[1];
  }
  if (!authToken) {
    return next(new apiErrorsModel("not authorized", 401));
  }
  const verified = jwt.verify(authToken, process.env.SECRET_KEY);

  const user = await UserModel.findById(verified.id);
  if (!user) return next(new apiErrorsModel("not found", 404));
  req.user = JSON.stringify(user);
  next();
});

//Login
const Login = catchErrorAsync(async (req, res, next) => {
  // console.log(req.body)
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) return next(new apiErrorsModel("not found", 404));
  if (!(await user.verifyPassword(req.body.password, user.password))) {
    return next(new apiErrorsModel("incorrect credentials", 401));
  }
  const token = tokenCreation(user._id);
  const { password, ...info } = user._doc;
  // console.log(user.password);
  res.cookie("token", token);
  res.status(200).json({
    message: "success",
    data: info,
    token,
  });
});



//Get all users
const getUsers = catchErrorAsync(async (req, res, next) => {
  const users = await UserModel.find().select("-password");

  res.status(200).json({
    message: "success",
    total: users.length,
    data: users,
  });
});

const getSingleUser = catchErrorAsync(async (req, res, next) => {
  req.user = JSON.parse(req.user);

  let user = await UserModel.findById(req.user._id);
  if (!user) return next(new apiErrorsModel("not found", 404));
  user = JSON.parse(JSON.stringify(user));

  if (user.isAdmin || req.user._id == req.params.id) {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const userFind = await UserModel.findById(req.params.id);
      res.status(200).json({
        message: "success",
        data: userFind,
      });
    }
  } else {
    return next(new apiErrorsModel("you can see only your profile", 401));
  }
});

export {
  Register,
  protect,
  Login,
  getUsers,
  getSingleUser,
};
