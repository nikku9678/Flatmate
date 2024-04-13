import express from 'express';

import { isAuthenticate } from '../middlewares/auth.js';
import { getProduct, postProduct,updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post("/post-product",isAuthenticate,postProduct);
router.get("/product",isAuthenticate,getProduct);
router.put("/update-product/:id",isAuthenticate,updateProduct);


export default router;
