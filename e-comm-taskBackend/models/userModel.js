import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
   
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [6, "password must be at least 6 characters"],
      maxLength: [20, "password can be maximum 20 characters"],
    },
    phoneNo: {
      type: Number,
    },
    shipping_Address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.verifyPassword = async function (userPassword,encryptedPassword) {
  // bcrypt.compare()
  return await bcrypt.compare(userPassword, encryptedPassword);
};

const UserModel = new mongoose.model("User", userSchema);
export default UserModel;
