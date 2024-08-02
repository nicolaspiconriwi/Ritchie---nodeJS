import { container } from 'tsyringe';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import ProductRepository from '../repositories/productRepository';
import ProductService from '../services/productService';

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);