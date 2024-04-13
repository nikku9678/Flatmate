import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { Product } from "../models/productModel.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";

export const postProduct = catchAsyncErrors(async (req, res, next) => {
  console.log("1");
  const { productName, description, price,category,collegeName, image, location } =
    req.body;
  if (
    !productName ||
    !description ||
    !category ||
    !price ||
    !collegeName ||
    !image ||
    !location
  ) {
    return next(new ErrorHandler("Please Fill Detail of Product", 400));
  }
  console.log("2");
  const product = await Product.create({
    productName,
    description,
    price,
    category,
    collegeName,
    image,
    location,
    user: req.user,
  });
  console.log("3");
  res.status(200).json({
    success: true,
    message: "New Product  is created!",
    product,
  });
});

export const getProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.user._id;
  console.log(id);

  const product = await Product.find({ user: id });

  if (!product) {
    return res.status(404).json({ message: "No such product found" });
  }

  res.status(200).json({
    status: true,
    message: "Product  fetched Successfully!",
    product,
  });
});
export const getAllProduct = catchAsyncErrors(async (req, res, next) => {
 

  const product = await Product.find({});

  if (!product) {
    return res.status(404).json({ message: "No such product found" });
  }

  res.status(200).json({
    status: true,
    message: "All Product  fetched Successfully!",
    length:product.length,
    product,
  });
});
export const getProductByCategory = catchAsyncErrors(async (req, res, next) => {

  const category = req.query.category;
  const location = req.query.location;
  console.log(category);


  if (!location && !category) {
    return res.status(400).json({ message: "Please provide either location or category parameter" });
  }
  
  let product;
  if (location) {
    product = await Product.find({ location: location });
  } else if (category) {
    product = await Product.find({ category: category });
  }
  
  if (!product) {
    return res.status(404).json({ message: "No such product found" });
  }
  res.status(200).json({
    status: true,

    message: "Product  fetched Successfully!",
    length: product.length,
    product,
  });
});


export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const { productName, description, price, category, collegeName, image, location } =
    req.body;
  const product = await Product.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!product) return next(new ErrorHandler("Product not found", 404));
  await product.save();

  res.status(200).json({
    success: true,
    message: "product Updated!",
  });

  next(error);
});
