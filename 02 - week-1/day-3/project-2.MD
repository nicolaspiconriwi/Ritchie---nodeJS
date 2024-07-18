# Node.js Anime Industry Workshop: Proyecto Real

## Introducción

Bienvenidos al proyecto de introducción a Node.js enfocado en la industria del anime. Este proyecto está diseñado para aplicar los conceptos básicos de Node.js, Express, promesas, y la diferencia entre dependencias de desarrollo y de producción. Crearás una API RESTful que interactúa con el sistema de archivos en lugar de una base de datos.

## Instrucciones de Entrega

1. Crea un repositorio en GitHub llamado `nodejs-anime-project`.
2. Sigue las instrucciones y completa los objetivos establecidos en este documento.
3. Sube tu proyecto a GitHub y comparte el enlace del repositorio.

## Objetivos

1. Configurar un entorno de desarrollo Node.js.
2. Crear un servidor web utilizando Node.js y Express.
3. Implementar rutas y middlewares en Express.
4. Leer y escribir datos en el sistema de archivos utilizando el módulo fs con promesas.
5. Manejar errores y asegurar la API con middlewares.
6. Diferenciar entre dependencias de desarrollo y de producción.

## Descripción del Proyecto

Crearás una API RESTful para gestionar información de la industria del anime. Las entidades a manejar serán: **Animes**, **Estudios**, **Directores** y **Personajes**. Cada entidad se almacenará en un archivo JSON en el sistema de archivos.

## Historias de Usuario

### 1. Como usuario, quiero poder crear un nuevo anime para agregarlo a la lista de animes.

- **Ruta:** POST /animes
- **Cuerpo de la solicitud:**
  ```json
  {
    "title": "Nombre del anime",
    "genre": "Género del anime",
    "studioId": 1
  }
  ```
- **Respuesta Exitosa:**
  - **Código:** 201
  - **Cuerpo de la respuesta:**
    ```json
    {
      "message": "Anime creado exitosamente",
      "anime": {
        "id": 1,
        "title": "Nombre del anime",
        "genre": "Género del anime",
        "studioId": 1
      }
    }
    ```

### 2. Como usuario, quiero poder ver todos los animes para revisarlos.

- **Ruta:** GET /animes
- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "animes": [
        {
          "id": 1,
          "title": "Nombre del anime",
          "genre": "Género del anime",
          "studioId": 1
        }
      ]
    }
    ```

### 3. Como usuario, quiero poder ver un anime específico por su ID para conocer sus detalles.

- **Ruta:** GET /animes/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "anime": {
        "id": 1,
        "title": "Nombre del anime",
        "genre": "Género del anime",
        "studioId": 1
      }
    }
    ```

### 4. Como usuario, quiero poder actualizar un anime existente para modificar sus detalles.

- **Ruta:** PUT /animes/:id

- **Cuerpo de la solicitud:**

  ```json
  {
    "title": "Nuevo nombre del anime",
    "genre": "Nuevo género del anime",
    "studioId": 1
  }
  ```

### 5. Como usuario, quiero poder eliminar un anime para mantener mi lista organizada.

- **Ruta:** DELETE /animes/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "message": "Anime eliminado exitosamente"
    }
    ```

### 6. Como usuario, quiero poder crear un nuevo estudio para agregarlo a la lista de estudios.

- **Ruta:** POST /studios

- **Cuerpo de la solicitud:**

  ```json
  {
    "name": "Nombre del estudio"
  }
  ```

### 7. Como usuario, quiero poder ver todos los estudios para revisarlos.

- **Ruta:** GET /studios

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "studios": [
        {
          "id": 1,
          "name": "Nombre del estudio"
        }
      ]
    }
    ```

### 8. Como usuario, quiero poder ver un estudio específico por su ID para conocer sus detalles.

- **Ruta:** GET /studios/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "studio": {
        "id": 1,
        "name": "Nombre del estudio"
      }
    }
    ```

### 9. Como usuario, quiero poder actualizar un estudio existente para modificar sus detalles.

- **Ruta:** PUT /studios/:id

- **Cuerpo de la solicitud:**

  ```json
  {
    "name": "Nuevo nombre del estudio"
  }
  ```

### 10. Como usuario, quiero poder eliminar un estudio para mantener mi lista organizada.

- **Ruta:** DELETE /studios/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "message": "Estudio eliminado exitosamente"
    }
    ```

### 11. Como usuario, quiero poder crear un nuevo director para agregarlo a la lista de directores.

- **Ruta:** POST /directors

- **Cuerpo de la solicitud:**

  ```json
  {
    "name": "Nombre del director"
  }
  ```

### 12. Como usuario, quiero poder ver todos los directores para revisarlos.

- **Ruta:** GET /directors

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "directors": [
        {
          "id": 1,
          "name": "Nombre del director"
        }
      ]
    }
    ```

### 13. Como usuario, quiero poder ver un director específico por su ID para conocer sus detalles.

- **Ruta:** GET /directors/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "director": {
        "id": 1,
        "name": "Nombre del director"
      }
    }
    ```

### 14. Como usuario, quiero poder actualizar un director existente para modificar sus detalles.

- **Ruta:** PUT /directors/:id

- **Cuerpo de la solicitud:**

  ```json
  {
    "name": "Nuevo nombre del director"
  }
  ```

### 15. Como usuario, quiero poder eliminar un director para mantener mi lista organizada.

- **Ruta:** DELETE /directors/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "message": "Director eliminado exitosamente"
    }
    ```

### 16. Como usuario, quiero poder crear un nuevo personaje para agregarlo a la lista de personajes.

- **Ruta:** POST /characters

- **Cuerpo de la solicitud:**

  ```json
  {
    "name": "Nombre del personaje",
    "animeId": 1
  }
  ```

### 17. Como usuario, quiero poder ver todos los personajes para revisarlos.

- **Ruta:** GET /characters

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "characters": [
        {
          "id": 1,
          "name": "Nombre del personaje",
          "animeId": 1
        }
      ]
    }
    ```

### 18. Como usuario, quiero poder ver un personaje específico por su ID para conocer sus detalles.

- **Ruta:** GET /characters/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "character": {
        "id": 1,
        "name": "Nombre del personaje",
        "animeId": 1
      }
    }
    ```

### 19. Como usuario, quiero poder actualizar un personaje existente para modificar sus detalles.

- **Ruta:** PUT /characters/:id

- **Cuerpo de la solicitud:**

  ```json
  {
    "name": "Nuevo nombre del personaje",
    "animeId": 1
  }
  ```

### 20. Como usuario, quiero poder eliminar un personaje para mantener mi lista organizada.

- **Ruta:** DELETE /characters/:id

- **Respuesta Exitosa:**

  - **Código:** 200
  - **Cuerpo de la respuesta:**

    ```json
    {
      "message": "Personaje eliminado exitosamente"
    }
    ```

## Requerimientos Técnicos

- El proyecto debe ser creado con Node.js y Express.
- Debes utilizar el módulo `fs` para leer y escribir archivos.
- Debes utilizar middlewares para manejar errores y asegurar la API.
- Debes diferenciar entre dependencias de desarrollo y de producción.

## Recursos

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [fs](https://nodejs.org/api/fs.html)
- [Middlewares en Express](https://expressjs.com/es/guide/using-middleware.html)
- [Diferencia entre dependencias de desarrollo y de producción](https://dev.to/therealdanvega/what-is-the-difference-between-dependencies-devdependencies-and-peerdependencies-in-a-npm-package-json-file-2b9)


