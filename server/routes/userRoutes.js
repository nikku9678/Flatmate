import express from 'express';

import { getUserProfile, login, register ,getAdminProfile,logout} from '../controllers/userController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

router.post("/login",login);
router.get("/logout",logout);
router.post("/register",register);
router.get("/profile",isAuthenticate,getUserProfile);
router.get("/admin",getAdminProfile);


export default router;
