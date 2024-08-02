# ¿Qué es un ORM?

Un ORM (Object-Relational Mapping) es una técnica de programación que permite convertir datos entre el sistema de tipos utilizado en un lenguaje de programación orientado a objetos y el modelo de datos utilizado en una base de datos relacional. En otras palabras, un ORM es una herramienta que permite interactuar con una base de datos relacional utilizando objetos en lugar de sentencias SQL.

# ¿Por qué usar un ORM?

Los ORM son ampliamente utilizados en el desarrollo de aplicaciones web y móviles debido a las siguientes ventajas:

- **Productividad**: Los ORM permiten a los desarrolladores interactuar con la base de datos utilizando objetos y métodos familiares, lo que reduce la cantidad de código necesario para realizar operaciones CRUD (Create, Read, Update, Delete).
- **Portabilidad**: Los ORM abstraen la capa de acceso a datos, lo que facilita la migración entre diferentes sistemas de gestión de bases de datos sin tener que cambiar el código de la aplicación.
- **Seguridad**: Los ORM protegen contra ataques de inyección SQL al utilizar consultas parametrizadas y sanitizar los datos de entrada.
- **Mantenimiento**: Los ORM facilitan la refactorización del código al permitir a los desarrolladores realizar cambios en el modelo de datos sin tener que modificar las consultas SQL manualmente.

# ¿Cómo funciona un ORM?

El proceso de interacción con una base de datos utilizando un ORM consta de los siguientes pasos:

1. Definir un modelo de datos que represente la estructura de la base de datos en forma de clases y atributos. Veamos un ejemplo con NodeJS y Sequelize:

```typescript
import express, { Request, Response } from "express";
import { Sequelize, Model, DataTypes } from "sequelize";

const app = express();
const port = 3000;

// Configuración de la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME!, // Nombre de la base de datos
  process.env.DB_USER!, // Usuario
  process.env.DB_PASS!, // Contraseña
  {
    host: process.env.DB_HOST!, // Host donde está alojada la base de datos
    dialect: "mysql", // El dialecto de la base de datos, también puede ser "postgres", "sqlite" o "mssql"
  }
);

// Definir un modelo de datos
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
    timestamps: false, // Si no quieres que Sequelize gestione createdAt y updatedAt
  }
);

// Sincronizar el modelo con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log("La tabla de usuarios ha sido sincronizada.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla de usuarios:", error);
  });

// Middleware para parsear JSON
app.use(express.json());

// Rutas de ejemplo
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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```
