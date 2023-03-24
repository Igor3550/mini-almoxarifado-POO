import { Request, Response } from "express";
import { CategoryService } from "../../services/CategoryService";

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    try {
      await this.categoryService.create(name);
      return res.sendStatus(201);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const categoies = await this.categoryService.list();
      return res.send(categoies);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body;
    try {
      await this.categoryService.update({id, name});
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      await this.categoryService.delete(id);
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}