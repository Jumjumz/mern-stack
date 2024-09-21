import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { createProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct); // this is what it should look like

router.delete("/:id", deleteProduct);

export default router;