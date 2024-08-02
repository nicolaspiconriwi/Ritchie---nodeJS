# CORS en node JS y TypeScript

## ¿Qué es CORS?

CORS (Cross-Origin Resource Sharing) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un servidor autorice a un cliente a través de un origen distinto al suyo. Es decir, CORS es un mecanismo que permite que un servidor indique a un navegador que solicitudes de un origen distinto al suyo son permitidas.

## ¿Por qué CORS?

CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad utilizado para proteger a los usuarios de aplicaciones web contra ataques maliciosos. Este mecanismo permite a los servidores autorizar solicitudes de clientes que provienen de un origen diferente al suyo, garantizando así que solo las fuentes autorizadas puedan acceder a los recursos del servidor.

## ¿Cómo funciona CORS?

CORS (Cross-Origin Resource Sharing) funciona mediante el uso de cabeceras HTTP adicionales que permiten a un servidor autorizar solicitudes de clientes que provienen de un origen diferente al suyo. Estas cabeceras son enviadas por el servidor al navegador del cliente, indicando si las solicitudes de un origen distinto al suyo son permitidas o no.

## Ejemplo en TypeScript

Primero, instala las dependencias necesarias:

```bash
npm install express cors
```

```typescript
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Configuración de CORS
const corsOptions = {
  origin: "http://example.com", // Reemplaza con el origen que deseas permitir
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Rutas de ejemplo
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/data", (req, res) => {
  res.json({
    message: "Esta es una respuesta desde la API con CORS habilitado.",
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

Vamos a entender un poco más sobre el código anterior:

- Importamos los módulos `express` y `cors`.
- Creamos una instancia de la aplicación Express.
- Configuramos las opciones de CORS:
  - `origin`: Indica el origen que deseamos permitir.
  - `methods`: Indica los métodos HTTP permitidos.
  - `credentials`: Indica si se permiten credenciales en las solicitudes.
  - `optionsSuccessStatus`: Indica el código de estado para las solicitudes preflight. Las
    solicitudes preflight son solicitudes que el navegador envía antes de una solicitud real para determinar si la solicitud real es segura.
- Usamos el middleware `cors` con las opciones configuradas.
- Definimos algunas rutas de ejemplo para probar CORS.
- Nota: Si no le pasamos ninguna opción a `cors`, permitirá todas las solicitudes de cualquier origen.
