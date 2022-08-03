import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import productsRoutes from "../routes/products";

dotenv.config();

const app = express();

//middleware
app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
// nhan du lieu tu html form
app.use(express.urlencoded());

//data base
const URI = process.env.MONGO_URL;

mongoose.connect(URI, { autoIndex: false }, (error) => {
  if (error) throw error;
  console.log("Connect mongoodb success");
});

//routes
app.use("/api/products", productsRoutes);

//start sever listening
const PORT = process.env.PORT || 3500;
app.listen(PORT, (req, res) => {
  console.log(`{server is listening at port ${PORT}}`);
});
