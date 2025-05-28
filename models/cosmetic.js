import mongoose from "mongoose";

const cosmeticSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  distributor: {
    type: String,
  },
  HSN: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  sellPrice: {
    type: Number,
  },

  // * Variants of the product so here we are using embdeded linking.
  variety: [
    {
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
      stock: {
        type: Number,
        default: 0,
      },
    },
  ],
  purchaseDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

const Cosmetic = mongoose.model("Cosmetic", cosmeticSchema);

export default Cosmetic;
