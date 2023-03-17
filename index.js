import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import express from "express";

const app = express();
  
connectDB();

app.listen(PORT);
console.log('Server is running on port ', PORT)