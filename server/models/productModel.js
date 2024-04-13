import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  required: true,
},
  category: {
    type: String,
    required: true,
  },
  price: {
    required: true,
    type: Number,
    select: false,
  },
  image: {
    type: String,
    default: false,
  },
  collegeName: {
    type: String,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const Product = mongoose.model("Product", productSchema);