
# Paso a paso para iniciar un proyecto Node con TypeScript para una API RESTful

## Crear el proyecto

1. Crear el directorio del proyecto
```bash
mkdir my-project
cd my-project
```

2. Inicializar el proyecto con npm
```bash
npm init -y
```

3. Instalar TypeScript y otras dependencias necesarias
```bash
npm install typescript ts-node @types/node --save-dev
npm install express @types/express
npm install nodemon --save-dev
npm install mysql2
npm install dotenv
```

4. Inicializar TypeScript
```bash
npx tsc --init
```

5. Editar el archivo `tsconfig.json` para configurar TypeScript
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

6. Crear la estructura de directorios
```bash
mkdir src
mkdir src/controllers
mkdir src/data-access
mkdir src/routes
mkdir src/interfaces
touch src/index.ts
touch .env
```

7. Configurar Nodemon para facilitar el desarrollo
Crear un archivo `nodemon.json` en la raíz del proyecto con el siguiente contenido:
```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

Agregar un script en el `package.json` para iniciar el servidor con Nodemon:
```json
"scripts": {
  "start": "nodemon"
}
```

### Crear el archivo de configuración de variables de entorno `.env`
```dotenv
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=mydatabase
PORT=3000
```

### Crear el acceso a datos y el pool de conexiones

En `src/data-access`, crear un archivo `db.ts`:
```typescript
import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
```

### Crear las interfaces
En `src/interfaces`, crear un archivo `User.ts`:
```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}
```

### Crear el controlador
En `src/controllers`, crear un archivo `userController.ts`:
```typescript
import { Request, Response } from 'express';
import { User } from '../interfaces/User';
import pool from '../data-access/db';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
};

export const createUser = async (req: Request, res: Response) => {
  const newUser: User = req.body;
  try {
    const [result] = await pool.query('INSERT INTO users SET ?', [newUser]);
    res.status(201).json({ id: (result as any).insertId, ...newUser });
  } catch (error) {
    res.status(500).send('Server error');
  }
};
```

### Crear el enrutador
En `src/routes`, crear un archivo `userRoutes.ts`:
```typescript
import { Router } from 'express';
import { getUsers, getUserById, createUser } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);

export default router;
```

En `src/routes`, crear un archivo `Router.ts`:
```typescript
import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

router.use('/users', userRoutes);

export default router;
```

### Configurar la vista principal (el archivo `index.ts`)
En `src/index.ts`:
```typescript
import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/Router';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

### Compilar y ejecutar el proyecto
Compilar el proyecto
```bash
npx tsc
```

Iniciar el servidor con Nodemon
```bash
npm start
```

Con estas mejoras, el proyecto ahora utiliza variables de entorno, tiene una estructura de carpetas organizada con las interfaces separadas, usa un pool de conexiones con MySQL2 y configura las rutas de manera modular.
