import express from "express";

import { isAuthenticate } from "../middlewares/auth.js";
import {
  getProduct,
  getProductByCategory,
  postProduct,
  updateProduct,
  getAllProduct
  
} from "../controllers/productController.js";

const router = express.Router();

router.post("/post-product", isAuthenticate, postProduct);
router.get("/product", isAuthenticate, getProduct);
router.get("/all-product", getAllProduct);
router.get("/product/s", isAuthenticate, getProductByCategory);
// router.get("/product/:location", isAuthenticate, getProductByLocation);
router.put("/update-product/:id", isAuthenticate, updateProduct);

export default router;
