import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//  * Importing the product routes
import productRoute from "./routes/productRoute.js";

dotenv.config();

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://your-frontend-domain.com']; // Add frontend origins

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// * this will help to convert the incoming data from the frontend to JSON format
app.use(bodyParser.json());

// * Configure the routes
app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log("The server is running on PORT " + process.env.PORT);
});

// * connecting to the database
(async () => {
  await connectDB();
})();
