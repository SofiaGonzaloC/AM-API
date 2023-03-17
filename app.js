import express from "express";
import cors from "cors";

const app = express();

//midleware
app.use(express.json());
app.use(cors());

export default app;