import ProductRepository from '../repositories/productRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Product } from '../models';

@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async getProductsByUserId(userId: number) {
        return await this.productRepository.findByUserId(userId);
    }

    async createProduct(product: CreationAttributes<Product>) {
        return await this.productRepository.create(product);
    }
}
