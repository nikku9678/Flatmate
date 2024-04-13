import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";

export const login = catchAsyncErrors(async (req, res, next) => {
  console.log("login")
  const { email, password, } = req.body;
  if (!email || !password ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }

  generateToken(user, "Login Successfully!", 201, res);
});

export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password } =
    req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler("User Already Exist", 400));
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });
  res.status(200).json({
    success: true,
    message: "New User Registered",
    user,
  });
});




export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  console.log("hello2")
  res.status(200).json({
    success: true,
    user,
  });
});
export const getAdminProfile = catchAsyncErrors(async (req, res, next) => {
  console.log("admin")
  const user = await User.find({});

  if(user.isAdmin === true){
      return console.log("kk")
  }
  
  console.log("hello")
  res.status(200).json({
    success: false,
    length: user.length,
    user,
  });
});


// Logout function for frontend patient
export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Logged Out Successfully.",
    });
});
