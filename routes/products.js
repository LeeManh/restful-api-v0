import express from "express";
import productsController from "../controllers/productsController";
import { checkProductData } from "../middlewares/validate";

const router = express.Router();

router.get("/", productsController.getProducts);

router.get("/:id", productsController.getProduct);

router.post("/", checkProductData, productsController.addProduct);

router.put("/:id", checkProductData, productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

export default router;
