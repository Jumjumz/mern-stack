import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

router.post("/", async (req, res) => { // change from to router
    const product = req.body; // user will send this data
    
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch(error) {
        console.error("Error Creating Product", error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
});

router.delete("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted"});
    } catch (error) {
        
    }
});

export default router;