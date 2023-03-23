import { ProductRepository } from '../../repositories/ProductRepository';
import { ProductService } from '../../services/ProductService';
import { ProductController } from './ProductController';

const productRepository = ProductRepository.getInstance();
const productService = new ProductService(productRepository);
export const productController = new ProductController(productService);