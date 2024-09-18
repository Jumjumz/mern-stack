import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    
});


app.listen(6969, () => {
    connectDB();
    console.log("Server started at http://localhost:6969");
});