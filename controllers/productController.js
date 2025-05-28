import Cosmetic from "../models/cosmetic.js";

export const createCosmeticProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      distributor,
      HSN,
      originalPrice,
      sellPrice,
      variety,
      purchaseDate,
      expiryDate,
      stock,
    } = req.body;

    console.log("Creating cosmetic product with data:", req.body);

    // * Createa a new cosmetic product
    const cosmeticProd = await Cosmetic.create({
      name,
      description,
      distributor,
      HSN,
      originalPrice,
      sellPrice,
      variety,
      purchaseDate,
      expiryDate,
      stock,
    });

    res.status(201).send({
      success: true,
      cosmeticProd,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllCosmeticProduct = async (req, res) => {
  try {
    // * Get all cosmetic products
    const cosmeticProducts = await Cosmetic.find({});

    res.status(200).json({
      success: true,
      products: cosmeticProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateCosmeticProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      distributor,
      HSN,
      originalPrice,
      sellPrice,
      variety,
      purchaseDate,
      expiryDate,
      stock,
    } = req.body;

    // * Update the cosmetic product
    const cosmeticProd = await Cosmetic.findByIdAndUpdate(
      id,
      {
        name,
        description,
        distributor,
        HSN,
        originalPrice,
        sellPrice,
        variety,
        purchaseDate,
        expiryDate,
        stock,
      },
      { new: true }
    );
    if (!cosmeticProd) {
      return res.status(404).json({
        success: false,
        message: "Cosmetic product not found",
      });
    }

    res.status(200).json({
      success: true,
      cosmeticProd,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteCosmeticProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // * delete the cosmetic product
    const cosmeticProd = await Cosmetic.findByIdAndDelete(id);

    if (!cosmeticProd) {
      return res.status(404).json({
        success: false,
        message: "Cosmetic product not found",
      });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
