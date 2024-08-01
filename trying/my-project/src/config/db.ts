import { createPool, Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool: Pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // Bandera que indica si la conexión debe esperar a que se libere una conexión cuando no hay conexiones disponibles.
  connectionLimit: 10, // Número máximo de conexiones permitidas.
  queueLimit: 0 // Número máximo de conexiones en cola. (0 significa ilimitado)
});

export default pool;