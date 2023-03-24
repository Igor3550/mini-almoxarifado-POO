import { Product } from "../models/Product";
import prisma from "../database/db";

export class ProductRepository{

  async create({ name, categoryId }: Product<number>): Promise<void> {
    await prisma.product.create({
      data: {
        name,
        categoryId
      }
    })
  }

  async getAll(): Promise<Product<number>[]> {
    const products = await prisma.product.findMany();
    return products;
  }

  async update({id, name, categoryId}: Product<number>): Promise<void> {
    await prisma.product.update({
      where:{
        id
      },
      data:{
        name,
        categoryId
      }
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.product.delete({
      where:{
        id
      }
    })
  }

  async getCategoryById(id: number): Promise<Product<number>> {
    const product = await prisma.product.findFirst({
      where:{
        id
      }
    });
    if(!product) throw new Error("Product not found!");
    return product;
  }
}