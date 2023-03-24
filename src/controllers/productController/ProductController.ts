import { ProductService } from "../../services/ProductService";
import { Response, Request } from "express";

export class ProductController {
  constructor(private productService: ProductService){}

  async create(req: Request, res: Response): Promise<Response> {
    const { name, categoryId } = req.body;
    try {
      await this.productService.create({ name, categoryId });
      return res.sendStatus(201);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const categoies = await this.productService.list();
      return res.send(categoies);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, categoryId } = req.body;
    try {
      await this.productService.update({id, name, categoryId});
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      await this.productService.delete(id);
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}