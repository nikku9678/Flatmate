import express from 'express'
import dotenv from 'dotenv';
import {connectDb} from './config/db.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
const app =express(); 

dotenv.config();
connectDb();

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes,productRoutes);
// app.use("/api/v1/user", productRoutes);


const PORT = 8080 || process.env.PORT


app.use(errorMiddleware);
app.listen(8080, ()=>{
    console.log(`Server is running on ${PORT}`)
})