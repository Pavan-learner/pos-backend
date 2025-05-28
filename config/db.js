import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "medical-pos" });

    console.log("connected to the database");
  } catch (error) {
    console.log("something went wrong while connecting to the db");
  }
};

export default connectDB;
