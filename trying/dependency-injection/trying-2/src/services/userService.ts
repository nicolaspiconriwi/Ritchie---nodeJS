import UserRepository from "../repositories/userRepository";
import { injectable, inject } from "tsyringe";
import { User } from "../models/user";

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number) {
    return await this.userRepository.findById(id);
  }

  async createUser(user: Partial<User>) {
    return await this.userRepository.create(user);
  }
}

/**
 * @injectable() es un decorador que indica que la clase es un servicio que puede ser inyectado en otras clases.
 * @inject(UserRepository) es un decorador que indica que el parámetro userRepository del constructor debe ser resuelto por el contenedor de inyección de dependencias.
 * El contenedor de inyección de dependencias se encarga de crear una instancia de la clase UserService y de inyectar una instancia de UserRepository en el parámetro userRepository del constructor.
 * 
 * Partial se utiliza para definir un tipo que tiene todas las propiedades de otro tipo como opcionales.
 */
