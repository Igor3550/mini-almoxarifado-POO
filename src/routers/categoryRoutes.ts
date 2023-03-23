import { Router } from "express";
import { categoryController } from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.post('/category', (req, res) => categoryController.create(req, res) );

categoryRouter.get('/category', (req, res) => categoryController.getAll(req, res) );

categoryRouter.put('/category', (req, res) => categoryController.update(req, res) );

categoryRouter.delete('/category', (req, res) => categoryController.delete(req, res) );

export default categoryRouter;