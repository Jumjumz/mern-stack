import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { createProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);

router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted"});
    } catch (error) {
        
    }
});

export default router;