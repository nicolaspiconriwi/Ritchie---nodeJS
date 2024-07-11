# Teoría de Node.js

## 1. Configuración del Entorno

Node.js es un entorno de tiempo de ejecución para JavaScript construido con el motor V8 de Chrome. Permite ejecutar JavaScript en el lado del servidor. npm es el gestor de paquetes predeterminado para Node.js.

**Instalación:**

- Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/). Recomendamos la version LTS pues es la más estable.
- Verifica la instalación con los siguientes comandos:
  ```sh
  node -v
  npm -v
  ```

## 2. Introducción a Node.js

Node.js utiliza un modelo de operaciones de entrada y salida sin bloqueo y **_orientado a eventos_**. Esto permite a Node.js manejar múltiples conexiones simultáneamente. El Event Loop es el encargado de gestionar las operaciones de entrada y salida de Node.js.

**Inicialización de un Proyecto:**

- Para iniciar un nuevo proyecto Node.js, usa npm init y sigue las instrucciones.
  ```sh
    mkdir my-project
    cd my-project
    npm init
  ```

**Hello World:**

- Crea un archivo `hello-world.js` con el siguiente contenido:
  ```js
  console.log("Hello, World!");
  ```
- Abre tu terminal y ejecuta el archivo con el comando:
  ```sh
  node hello-world.js
  ```

## 3. import vs require: ¿Cuál es la diferencia?

En Node.js, puedes importar módulos de dos maneras: `require` y `import`. La principal diferencia entre ambas es que `require` es síncrono y `import` es asíncrono. Además, `import` es una característica de ECMAScript, mientras que `require` es una característica de Node.js.

**Uso de `require`:**

- Crea un archivo `require-example.js` con el siguiente contenido:

  ```js
  const fs = require("fs");

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
  ```

## 4. Manejo de Paquetes con npm

npm es el gestor de paquetes de Node.js. Permite instalar, actualizar y eliminar paquetes de Node.js. Los paquetes se instalan en la carpeta `node_modules`. El catalogo de paquetes de tu proyecto se guarda en el archivo `package.json`.

**Instalación de un Paquete:**

- Instala un paquete con el comando:
  ```sh
  npm install axios
  ```

**Uso de un Paquete:**

- Crea un archivo `axios-example.js` con el siguiente contenido:

  ```js
  const axios = require("axios");

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node axios-example.js
  ```

- Deberías ver un listado de posts en tu consola de Visual Studio Code similar al siguiente:

  ```json
  [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    ...
  ]
  ```

## 5. Creación de un Servidor Básico

Antes de iniciar con la creación de un servidor, es importante que leas otro recurso que te deje en los siguientes enlaces:
  - [RESTful Architecture](../repaso/restful-architecture.md)
  - [HTTP Verbs](../repaso/http-verbs.md)

Primero que todo, recordemos que un servidor es un programa que escucha peticiones HTTP y responde a ellas. Node.js incluye un módulo llamado `http` que permite crear servidores web.

Y... Por qué es necesario un servidor web? Porque es el encargado de recibir las peticiones de los clientes y responder con la información solicitada. Por ejemplo, cuando visitas una página web, tu navegador envía una petición al servidor web que aloja la página, y este responde con el contenido de la página.

**Creación de un Servidor:**

- Crea un archivo `server.js` con el siguiente contenido:

  ```js
  const http = require("http");

  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  });

  server.listen(3000, "Esto es un mensaje de prueba", () => {
    console.log("Server running at http://localhost:3000/");
  });
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node server.js
  ```

- Abre tu navegador y visita [http://localhost:3000/](http://localhost:3000/). Deberías ver el mensaje "Hello, World!".

- Expliquemos el código:
  - `http.createServer` crea un servidor HTTP. Recibe una función que se ejecuta cada vez que el servidor recibe una petición.
  - `res.writeHead` establece el código de estado de la respuesta y el tipo de contenido. En aplicaciones backend, el tipo de contenido suele ser `application/json`, sin embargo en este ejemplo usamos `text/plain` para demostrar que tambien puedes enviar texto plano.
  - `res.end` envía la respuesta al cliente. En este caso, enviamos el mensaje "Hello, World!". En node.js, vamos a identificar las palabras reservadas `req` y `res` que representan la petición y la respuesta respectivamente.
  - `server.listen` **_inicia el servidor_** y lo hace escuchar en el puerto 3000. Por detrás de bambalinas, un servicio llamado DNS (Domain Name System) se encarga de traducir el nombre del dominio a una dirección IP. En este caso, `localhost` se traduce a `127.0.0.1`, que es la dirección IP local de tu máquina. Esto significa que el servidor solo estará accesible desde la misma máquina en la que se está ejecutando.

## 6. Introducción al filesystem

Node.js incluye un módulo llamado `fs` que permite interactuar con el sistema de archivos de tu computadora. Con este módulo, puedes leer y escribir archivos, crear y eliminar directorios, y mucho más, siempre y cuando tengas los permisos necesarios.

**Lectura de un Archivo:**

- Crea un archivo `read-file.js` con el siguiente contenido:

  ```js
  const fs = require("fs");

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
  ```

- Crea un archivo `example.txt` con el siguiente contenido:

  ```
  Hello, World!
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node read-file.js
  ```

- Deberías ver el mensaje "Hello, World!" en tu consola.

- Entendamos el código:
  - `fs.readFile` lee un archivo de tu sistema de archivos. Recibe tres argumentos:
    - la ruta del archivo
    - la codificación del archivo (en este caso, `utf8`),
    - y una función de devolución de llamada que se ejecuta cuando la lectura del archivo se completa.
  - La función de devolución de llamada recibe dos argumentos: un error (si lo hay) y los datos leídos del archivo. Si no hay errores, los datos se imprimen en la consola.

**Escritura de un Archivo:**

- Crea un archivo `write-file.js` con el siguiente contenido:

  ```js
  const fs = require("fs");

  fs.writeFile("example.txt", "Hello, World!", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("File written successfully");
  });
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node write-file.js
  ```

- Deberías ver el mensaje "File written successfully" en tu consola.

- Abre el archivo `example.txt` y verifica que el mensaje "Hello, World!" se haya escrito correctamente.

- Entendamos el código:
  - `fs.writeFile` escribe datos en un archivo. Recibe tres argumentos:
    - la ruta del archivo
    - los datos a escribir
    - y una función de devolución de llamada que se ejecuta cuando la escritura del archivo se completa.
  - La función de devolución de llamada recibe un argumento: un error (si lo hay). Si no hay errores, se imprime el mensaje "File written successfully" en la consola.

## 7. Repasando los modulos path y os

Node.js incluye dos módulos llamados `path` y `os` que permiten interactuar con el sistema de archivos y el sistema operativo de tu computadora.

**Módulo `path`:**

- El módulo `path` proporciona utilidades para trabajar con rutas de archivos y directorios. Por ejemplo, puedes unir rutas, resolver rutas relativas, extraer el nombre de un archivo de una ruta, y mucho más.

- Crea un archivo `path-example.js` con el siguiente contenido:

  ```js
  const path = require("path");

  const filePath = "/Users/johndoe/Documents/example.txt";

  console.log(path.dirname(filePath)); // dirname se utiliza para obtener el directorio de la ruta
  console.log(path.basename(filePath)); // basename se utiliza para obtener el nombre del archivo de la ruta
  console.log(path.extname(filePath)); // extname se utiliza para obtener la extensión del archivo de la ruta
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node path-example.js
  ```

- Deberías ver la siguiente salida en tu consola:

  ```
  /Users/johndoe/Documents
  example.txt
  .txt
  ```

**Módulo `os`:**

- El módulo `os` proporciona utilidades para trabajar con el sistema operativo de tu computadora. Por ejemplo, puedes obtener información sobre la arquitectura de tu CPU, la cantidad de memoria disponible, el nombre del host, y mucho más.

- Crea un archivo `os-example.js` con el siguiente contenido:

  ```js
  const os = require("os");

  console.log(os.arch()); // arch se utiliza para obtener la arquitectura de la CPU
  console.log(os.cpus()); // cpus se utiliza para obtener información sobre las CPUs
  console.log(os.freemem()); // freemem se utiliza para obtener la cantidad de memoria libre
  console.log(os.hostname()); // hostname se utiliza para obtener el nombre del host
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node os-example.js
  ```

- Deberías ver la siguiente salida en tu consola:

  ```
  x64
  [
    {
      model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
      speed: 2592,
      times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
    },
    ...
  ]
  1234567890
  MacBook-Pro-de-Nicolas.local
  ```

## 8. Creación de un Servidor con Express

Express es un framework web minimalista y flexible para Node.js. Permite crear aplicaciones web y APIs de manera sencilla y rápida. Express también simplifica la creación de rutas, el manejo de solicitudes y respuestas, y la integración de middlewares. Tranquilo... Ya verás que es más fácil de lo que parece.

Antes de continuar con nuestro primer servidor, veamos algunos conceptos importantes:

- **Middleware:** es una función que se ejecuta en el medio del ciclo de solicitud-respuesta. Puede realizar tareas como analizar datos de solicitud, agregar encabezados de respuesta, y más. Express incluye varios middlewares integrados, y también puedes crear tus propios middlewares. Los middlewares se pueden usar para realizar tareas comunes, como autenticación, compresión, registro, etc.

- **Rutas:** son las URL que el servidor puede manejar. Cada ruta puede tener uno o más métodos HTTP asociados, como GET, POST, PUT, DELETE, etc.

**Instalación de Express:**

- Express, como cualquier otra librería de Node.js, se instala a través de npm. Para instalar Express, ejecuta el siguiente comando en tu terminal:

  ```sh
  npm install express
  ```

**Creación de un Servidor con Express:**

- Crea un archivo `express-server.js` con el siguiente contenido:

  ```js
  const express = require("express");
  const app = express();
  const PORT = 3000;

  app.get("/", (req, res) => {
    res.send("Hello from Express!");
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
  ```

- Ejecuta el archivo con el comando:

  ```sh
  node express-server.js
  ```

- Abre tu navegador y visita [http://localhost:3000/](http://localhost:3000/). Deberías ver el mensaje "Hello from Express!".

- Expliquemos el código:
  - `const express = require("express");` importa el módulo Express con `require` y lo asigna a la variable `express`.
  - `const app = express();` crea una instancia de Express y se la asigna a la variable `app`.
  - `app.get("/", (req, res) => { ... });` define una ruta raíz (`/`) que responde con el mensaje "Hello from Express!".
  - `app.listen(PORT, () => { ... });` inicia el servidor y lo hace escuchar en el puerto 3000.
