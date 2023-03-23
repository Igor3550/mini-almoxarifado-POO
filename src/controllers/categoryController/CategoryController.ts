import { Request, Response } from "express";
import { CategoryService } from "../../services/CategoryService";

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  create(req: Request, res: Response): Response {
    const { name } = req.body;
    this.categoryService.create(name);
    return res.sendStatus(201);
  }

  getAll(req: Request, res: Response): Response {
    const categoies = this.categoryService.list();
    return res.send(categoies);
  }

  update(req: Request, res: Response): Response {
    const { id, name } = req.body;
    this.categoryService.update({id, name});
    return res.sendStatus(200);
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.body;
    this.categoryService.delete(id);
    return res.sendStatus(200);
  }
}