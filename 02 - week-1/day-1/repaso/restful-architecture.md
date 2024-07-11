# Arqutiectura restful

## ¿Qué es REST?

REST (Representational State Transfer) es un estilo de arquitectura de software que define un conjunto de restricciones para el diseño de servicios web. Estas restricciones se aplican a los servicios web que se comunican a través del protocolo HTTP. REST se basa en el concepto de recursos, que son entidades que pueden ser accedidas y manipuladas a través de un identificador global, como una URL.

## Principios de REST

REST se basa en los siguientes principios:

- **Recursos**: Los servicios web RESTful se basan en recursos, que son entidades que pueden ser accedidas y manipuladas a través de una URL. Cada recurso tiene un identificador único y representa un objeto o conjunto de datos en el sistema.

- **URI (Identificador de Recursos Uniforme)**: Cada recurso en un servicio web RESTful se identifica mediante una URI única. La URI es una cadena de texto que representa la ubicación del recurso en el sistema. Por ejemplo, `/users` podría ser la URI de un recurso que representa una colección de usuarios.

- **Verbos HTTP**: Los servicios web RESTful utilizan los verbos HTTP para definir las operaciones que se pueden realizar sobre un recurso. Los verbos más comunes son `GET`, `POST`, `PUT`, `PATCH`, y `DELETE`, que se utilizan para recuperar, crear, actualizar, modificar parcialmente, y eliminar recursos, respectivamente.

- **Representaciones**: Los recursos en un servicio web RESTful se representan en un formato específico, como JSON o XML. Las representaciones se utilizan para intercambiar datos entre el cliente y el servidor, y pueden incluir información sobre el recurso, como sus atributos y relaciones con otros recursos.

- **Estado de la Aplicación**: Los servicios web RESTful son stateless, lo que significa que cada solicitud del cliente al servidor debe contener toda la información necesaria para procesarla. El servidor no mantiene el estado de la aplicación entre solicitudes, lo que simplifica la implementación y mejora la escalabilidad.

- **HATEOAS (Hypermedia as the Engine of Application State)**: RESTful API debe proporcionar enlaces a recursos relacionados en las respuestas a las solicitudes. Estos enlaces permiten a los clientes navegar por la API de forma dinámica, descubriendo y accediendo a recursos relacionados sin necesidad de conocer la estructura de la API de antemano.

## Ejemplo de API RESTful

A continuación, se muestra un ejemplo de una API RESTful que gestiona una colección de usuarios:

- **GET /users**: Recupera la lista de todos los usuarios.
- **GET /users/{id}**: Recupera los detalles de un usuario específico.
- **POST /users**: Crea un nuevo usuario.
- **PUT /users/{id}**: Actualiza los datos de un usuario existente.
- **PATCH /users/{id}**: Actualiza parcialmente los datos de un usuario existente.
- **DELETE /users/{id}**: Elimina un usuario existente.

Además de las operaciones CRUD básicas, una API RESTful puede incluir otras operaciones para gestionar recursos relacionados. Por ejemplo:

- **GET /users/{id}/posts**: Recupera los posts publicados por un usuario específico.
- **POST /users/{id}/posts**: Crea un nuevo post para un usuario específico.
- **PUT /users/{id}/posts/{post_id}**: Actualiza un post existente de un usuario específico.
- **DELETE /users/{id}/posts/{post_id}**: Elimina un post existente de un usuario específico.
- **GET /users/{id}/comments**: Recupera los comentarios realizados por un usuario específico.
- **POST /users/{id}/comments**: Crea un nuevo comentario para un usuario específico.
- **PUT /users/{id}/comments/{comment_id}**: Actualiza un comentario existente de un usuario específico.
- **DELETE /users/{id}/comments/{comment_id}**: Elimina un comentario existente de un usuario específico.
- **GET /users/{id}/friends**: Recupera la lista de amigos de un usuario específico.
- **POST /users/{id}/friends**: Añade un nuevo amigo a la lista de amigos de un usuario específico.

También, para filtros de busqueda:

- **GET /users?name=John**: Recupera los usuarios cuyo nombre coincide con "John".
- **GET /users?age=30**: Recupera los usuarios cuya edad es 30.
- **GET /users?city=New York**: Recupera los usuarios que viven en la ciudad de Nueva York.

Filtros de busqueda, complejos:

- **GET /users?name=John&age=30&city=New York**: Recupera los usuarios cuyo nombre es "John", edad es 30, y viven en la ciudad de Nueva York.
- **GET /users?name=John&age=30|31&city=New York**: Recupera los usuarios cuyo nombre es "John", edad es 30 o 31, y viven en la ciudad de Nueva York.
- **GET /users?name=John&age=30&city=New York&sort=asc**: Recupera los usuarios cuyo nombre es "John", edad es 30, y viven en la ciudad de Nueva York, ordenados de forma ascendente.
- **GET /users?name=John&age=30&city=New York&sort=asc&limit=10**: Recupera los primeros 10 usuarios cuyo nombre es "John", edad es 30, y viven en la ciudad de Nueva York, ordenados de forma ascendente.
- **GET /users?name=John&age=30&city=New York&sort=asc&limit=10&offset=0**: Recupera los primeros 10 usuarios cuyo nombre es "John", edad es 30, y viven en la ciudad de Nueva York, ordenados de forma ascendente, empezando desde el primer usuario.
- **GET /users?name=John&age=30&city=New York&sort=asc&limit=10&offset=10**: Recupera los siguientes 10 usuarios cuyo nombre es "John", edad es 30, y viven en la ciudad de Nueva York, ordenados de forma ascendente, empezando desde el undécimo usuario.

Paginación:

- **GET /users?limit=10&offset=0**: Recupera los primeros 10 usuarios.
- **GET /users?limit=10&offset=10**: Recupera los siguientes 10 usuarios.
- **GET /users?limit=10&offset=20**: Recupera los siguientes 10 usuarios.

Paginación compleja:

- **GET /users?limit=10&offset=0&sort=asc**: Recupera los primeros 10 usuarios, ordenados de forma ascendente.
- **GET /users?limit=10&offset=10&sort=asc**: Recupera los siguientes 10 usuarios, ordenados de forma ascendente.
- **GET /users?limit=10&offset=20&sort=asc**: Recupera los siguientes 10 usuarios, ordenados de forma ascendente.


Paginación con page como query param:

- **GET /users?page=1&limit=10**: Recupera los primeros 10 usuarios.
- **GET /users?page=2&limit=10**: Recupera los siguientes 10 usuarios.
- **GET /users?page=3&limit=10**: Recupera los siguientes 10 usuarios.
