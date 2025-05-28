import express from "express";
import {
  createCosmeticProduct,
  getAllCosmeticProduct,
  updateCosmeticProduct,
  deleteCosmeticProduct,
} from "../controllers/productController.js";

const router = express.Router();

// * These routes for the cosmetic products
router.post("/cosmetic", createCosmeticProduct);
router.get("/cosmetic", getAllCosmeticProduct);
router.get("/cosmetic/:id", getAllCosmeticProduct); // Assuming you want to get a specific product by ID
router.put("/cosmetic/:id", updateCosmeticProduct); // Assuming you want to update a specific product by ID
router.delete("/cosmetic/:id", deleteCosmeticProduct); // Assuming you want to delete a specific product by ID

export default router;
