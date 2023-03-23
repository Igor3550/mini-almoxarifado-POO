import { ProductService } from "../../services/ProductService";
import { Response, Request } from "express";

export class ProductController {
  constructor(private productService: ProductService){}

  create(req: Request, res: Response): Response {
    const { name, categoryId } = req.body;
    this.productService.create({ name, categoryId });
    return res.sendStatus(201);
  }

  getAll(req: Request, res: Response): Response {
    const categoies = this.productService.list();
    return res.send(categoies);
  }

  update(req: Request, res: Response): Response {
    const { id, name, categoryId } = req.body;
    this.productService.update({id, name, categoryId});
    return res.sendStatus(200);
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.body;
    this.productService.delete(id);
    return res.sendStatus(200);
  }
}