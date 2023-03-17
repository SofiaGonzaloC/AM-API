import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js"

const app = express();

//midleware
app.use(express.json());
app.use(cors());

//routes 
app.use(usersRoutes);

export default app;