# Verbos HTTP

## Introducción

Los verbos HTTP son métodos que indican la acción que se realizará sobre un recurso en un servidor. Los verbos más comunes son `GET`, `POST`, `PUT`, `PATCH`, y `DELETE`. Cada uno de estos verbos tiene un significado específico y se utiliza en diferentes situaciones.

En este documento, aprenderás sobre los verbos HTTP y cómo se utilizan en el desarrollo web.

## Verbos HTTP

### GET

El verbo `GET` se utiliza para recuperar información de un recurso en un servidor. Cuando se realiza una solicitud `GET`, el servidor devuelve el contenido del recurso solicitado en la respuesta. Este verbo se utiliza comúnmente para recuperar páginas web, imágenes, archivos, y otros recursos estáticos.

### POST

El verbo `POST` se utiliza para enviar datos al servidor para su procesamiento. Cuando se realiza una solicitud `POST`, los datos se envían en el cuerpo de la solicitud y el servidor los procesa según la lógica de la aplicación. Este verbo se utiliza comúnmente para enviar formularios, cargar archivos, y realizar otras operaciones que requieren enviar datos al servidor.

### PUT

El verbo `PUT` se utiliza para actualizar un recurso en el servidor. Cuando se realiza una solicitud `PUT`, los datos se envían en el cuerpo de la solicitud y el servidor actualiza el recurso con los datos proporcionados. Este verbo se utiliza comúnmente para actualizar información existente, como editar una publicación en un blog o modificar la información de un usuario.


### PATCH

El verbo `PATCH` se utiliza para actualizar parcialmente un recurso en el servidor. A diferencia de `PUT`, que actualiza el recurso completo, `PATCH` se utiliza para realizar modificaciones parciales en un recurso. Este verbo se utiliza comúnmente para actualizar campos específicos de un recurso sin afectar el resto de la información.

### DELETE

El verbo `DELETE` se utiliza para eliminar un recurso en el servidor. Cuando se realiza una solicitud `DELETE`, el servidor elimina el recurso especificado. Este verbo se utiliza comúnmente para eliminar publicaciones, usuarios, y otros recursos que ya no son necesarios.

## Ejemplos reales CRUD de reservas de Hotel

### GET /reservas

Recupera todas las reservas de hotel almacenadas en el servidor.

#### Ejemplo en node.js

```javascript
app.get('/reservas', (req, res) => {
  // Lógica para recuperar todas las reservas de hotel
  const reservas = db.getReservas();
  res.json(reservas);
});
```

### POST /reservas

Crea una nueva reserva de hotel con los datos proporcionados en el cuerpo de la solicitud.

#### Ejemplo en node.js

```javascript
app.post('/reservas', (req, res) => {
  // Lógica para crear una nueva reserva de hotel
  const nuevaReserva = req.body;
  const reservaCreada = db.createReserva(nuevaReserva);
  res.status(201).json(reservaCreada);
});
```

### PUT /reservas/:id

Actualiza la reserva de hotel con el ID especificado con los datos proporcionados en el cuerpo de la solicitud.

#### Ejemplo en node.js

```javascript
app.put('/reservas/:id', (req, res) => {
  // Lógica para actualizar la reserva de hotel con el ID especificado
  const id = req.params.id;
  const datosActualizados = req.body;
  const reservaActualizada = db.updateReserva(id, datosActualizados);
  res.json(reservaActualizada);
});
```

### PATCH /reservas/:id

Actualiza parcialmente la reserva de hotel con el ID especificado con los datos proporcionados en el cuerpo de la solicitud.

#### Ejemplo en node.js

```javascript
app.patch('/reservas/:id', (req, res) => {
  // Lógica para actualizar parcialmente la reserva de hotel con el ID especificado
  const id = req.params.id;
  const datosActualizados = req.body;
  const reservaActualizada = db.partialUpdateReserva(id, datosActualizados);
  res.json(reservaActualizada);
});
```

### DELETE /reservas/:id

Elimina la reserva de hotel con el ID especificado.

#### Ejemplo en node.js

```javascript
app.delete('/reservas/:id', (req, res) => {
  // Lógica para eliminar la reserva de hotel con el ID especificado
  const id = req.params.id;
  db.deleteReserva(id);
  res.status(204).end();
});
```