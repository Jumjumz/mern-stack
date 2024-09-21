import Product from "../models/product.model.js";

export const createProduct = async (res, req) => {

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
}