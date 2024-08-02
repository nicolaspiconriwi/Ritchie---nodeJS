import { injectable } from 'tsyringe';
import { Product } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async findByUserId(userId: number) {
        return await Product.findAll({ where: { userId } });
    }

    async create(product: CreationAttributes<Product>) {
        return await Product.create(product);
    }
}

/**
 * CreationAttributes<Product> es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 */
