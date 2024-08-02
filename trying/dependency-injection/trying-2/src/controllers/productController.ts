// src/controllers/ProductController.ts
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ProductService from '../services/productService';

export default class ProductController {
    static async getAllProducts(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const products = await productService.getAllProducts();
        res.json(products);
    }

    static async getProductById(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }

    static async getProductsByUserId(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const products = await productService.getProductsByUserId(parseInt(req.params.userId));
        res.json(products);
    }

    static async createProduct(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    }
}
