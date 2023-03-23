import { Router } from "express";
import { productController } from "../controllers/productController";

const productRouter = Router();

productRouter.post('/product', (req, res) => productController.create(req, res) );

productRouter.get('/product', (req, res) => productController.getAll(req, res) );

productRouter.put('/product', (req, res) => productController.update(req, res) );

productRouter.delete('/product', (req, res) => productController.delete(req, res) );

export default productRouter;