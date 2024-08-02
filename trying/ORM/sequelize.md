# Sequelize y su Uso en Node.js

## Introducción a Sequelize

Sequelize es un ORM (Object-Relational Mapping) para Node.js que facilita la interacción con bases de datos SQL. Sequelize soporta una amplia variedad de bases de datos como MySQL, PostgreSQL, SQLite y MSSQL.

## ¿Cómo funciona Sequelize?

Sequelize funciona mediante la definición de modelos que representan las tablas de la base de datos. Los modelos se definen utilizando clases y se sincronizan con la base de datos para crear o modificar las tablas según sea necesario. A continuación, se muestra un ejemplo de cómo utilizar Sequelize en un proyecto Node.js.

## Ejemplo en TypeScript

### Instalación

Primero, asegúrate de tener instaladas las dependencias necesarias:

```bash
npm install express sequelize mysql2 dotenv
npm install --save-dev @types/express @types/sequelize typescript ts-node
```

### Configuración del proyecto

Asegúrate de tener un archivo `tsconfig.json` configurado para tu proyecto TypeScript. Aquí tienes un ejemplo básico:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Configuración de variables de entorno

Crea un archivo `.env` en la raíz de tu proyecto y añade las siguientes variables:

```
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=tu_base_de_datos
```

### Código del servidor

Crea un archivo `src/server.ts` y añade el siguiente código:

```typescript
import express, { Request, Response } from "express";
import { Sequelize, Model, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST!,
    dialect: "mysql", // Puedes cambiarlo a 'postgres', 'sqlite', 'mssql', etc.
  }
);

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("La tabla de usuarios ha sido sincronizada.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla de usuarios:", error);
  });

app.use(express.json());

app.post("/api/users", async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await User.update(req.body, { where: { id: userId } });
    res.status(200).json({ message: "Usuario actualizado." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await User.destroy({ where: { id: userId } });
    res.status(200).json({ message: "Usuario eliminado." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

## Vamos a entender el código

1. **Importación de módulos**:
   - Importamos los módulos necesarios de Express, Sequelize y dotenv.

2. **Configuración de Express**:
    - Creamos una instancia de Express y definimos el puerto en el que se ejecutará el servidor.

3. **Configuración de Sequelize**:
    - Creamos una instancia de Sequelize y la configuramos con las credenciales de la base de datos. Aqui es muy importante destacar que podemos probar si esta conexión es exitosa o no, utilizando el método `authenticate()` de la instancia de Sequelize. Supongamos que a este punto ya hemos definido las variables de entorno en un archivo `.env` y también hemos importado el módulo `dotenv` para cargarlas. Finalmente creamos la constante `sequelize` que es la instancia de Sequelize. Y acto seguido:

    ```typescript
    sequelize
      .authenticate()
      .then(() => {
        console.log("Conexión exitosa a la base de datos.");
      })
      .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
      });
    ```

4. **Definición del modelo**:
    - Definimos un modelo `User` que representa la tabla `users` con los atributos `id`, `username` y `email`. Si deseas que Sequelize gestione automáticamente los campos `createdAt` y `updatedAt`, puedes omitir la opción `timestamps: false`. Si deseas indagar mas sobre las opciones que puedes pasar a la función `init()` puedes visitar la [documentación oficial](https://sequelize.org/docs/v6/core-concepts/model-basics).

5. **Sincronización del modelo**:
    - Sincronizamos el modelo con la base de datos utilizando el método `sync()`. Este método crea la tabla en la base de datos si no existe y la actualiza si ya existe. Si deseas que Sequelize no modifique la estructura de la tabla, puedes pasar la opción `alter: false` al método `sync()`.

6. **Middleware para parsear JSON**:
    - Utilizamos el middleware `express.json()` para parsear el cuerpo de las peticiones como JSON. Esto ya lo hemos visto en otros ejemplos.

7. **Rutas de ejemplo**:
    - Implementamos rutas para crear, leer, actualizar y eliminar usuarios. En cada ruta, manejamos las operaciones CRUD correspondientes utilizando los métodos de Sequelize. Si deseas indagar mas sobre los métodos que puedes utilizar en un modelo Sequelize, puedes visitar la [documentación oficial](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/). Y para consultas mas avanzadas puedes visitar la [documentación de Querying](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/).

8. **Inicio del servidor**:
    - Iniciamos el servidor y lo hacemos escuchar en el puerto especificado.

## Taller Práctico

### Objetivo del Taller

Implementar una pequeña aplicación Node.js utilizando Sequelize para realizar operaciones CRUD en una base de datos MySQL.

### Pasos a Seguir

1. **Configuración del proyecto**:

   - Crea un nuevo proyecto Node.js e instala las dependencias necesarias (`express`, `sequelize`, `mysql2`, `dotenv`).

2. **Definición del modelo**:

   - Define un modelo `User` con los atributos `id`, `username`, y `email`.

3. **Sincronización de la base de datos**:

   - Sincroniza el modelo con la base de datos utilizando `sequelize.sync()`.

4. **Implementación de rutas CRUD**:

   - Implementa rutas para crear, leer, actualizar y eliminar usuarios.

5. **Prueba de la aplicación**:
   - Utiliza herramientas como Postman para probar las rutas CRUD de tu API.