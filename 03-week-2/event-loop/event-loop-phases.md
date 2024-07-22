
# Event Loop Phases in Node.js

Este archivo proporciona un ejemplo práctico del Event Loop en Node.js, demostrando las diferentes fases y cómo se ejecutan los callbacks en cada una.

## Código: `event-loop-phases.js`

```javascript
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Inicialización y Configuración
app.use(express.json());

// Registro de Rutas y Eventos
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    // Procesamiento Asincrónico
    setTimeout(() => {
        res.send(`Received data: ${JSON.stringify(data)}`);
    }, 1000);
});

// Fase de timers
setTimeout(() => {
    console.log('1. Timers phase: setTimeout');
}, 0);

// Fase de pending callbacks
fs.readFile(__filename, () => {
    console.log('2. Pending callbacks phase: readFile callback');

    // Fase de check
    setImmediate(() => {
        console.log('4. Check phase: setImmediate');
    });

    // Fase de close callbacks
    setTimeout(() => {
        console.log('6. Close callbacks phase');
    }, 0);

    // Usado internamente, no podemos demostrar idle y prepare directamente.
    // Para simular esta fase, podemos usar process.nextTick()
    process.nextTick(() => {
        console.log('3. Idle, prepare phase simulated with process.nextTick');
    });
});

// Fase de poll
fs.readFile('/dev/random', () => {
    console.log('5. Poll phase: reading random data');
});

// Manejo de Errores y Finalización
process.on('SIGINT', () => {
    console.log('Gracefully shutting down from SIGINT (Ctrl+C)');
    process.exit();
});

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

// Inicio del Servidor (Entrada al Bucle de Eventos)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

## Explicación del Código

1. **Servidor Express:**
   - Se configura un servidor Express que responde a solicitudes GET en la raíz (`/`) y POST en `/data`.
   - Utiliza `setTimeout` en la ruta POST para simular un procesamiento asincrónico.

2. **Fase de Timers:** Recordemos que esta fase se encarga de ejecutar los callbacks de `setTimeout` y `setInterval`.
   - `setTimeout` se utiliza para imprimir un mensaje en la consola después de 0 milisegundos.
   ```javascript
   setTimeout(() => {
       console.log('1. Timers phase: setTimeout');
   }, 0);
   ```

3. **Fase de Pending Callbacks:** Recordemos que esta fase se encarga de ejecutar los callbacks de operaciones de I/O y otros callbacks. ¿Qué son operaciones I/O?

   Las operaciones de I/O (entrada/salida) en Node.js se refieren a interacciones con sistemas externos que pueden ser asíncronas y generalmente consumen tiempo. Estas incluyen:

   - `fs.readFile` se utiliza para leer el archivo actual (`__filename`), y su callback se ejecuta en la fase de pending callbacks.
   ```javascript
   fs.readFile(__filename, () => {
       console.log('2. Pending callbacks phase: readFile callback');
   ```

4. **Fase de Idle, Prepare:** Recordemos que esta fase se encarga de preparar el Event Loop para la siguiente iteración. No es algo que se pueda demostrar directamente, sin embargo, piensa en ello como una fase de preparación para la siguiente iteración del Event Loop.
   - `process.nextTick` se utiliza para simular esta fase. Este callback se ejecuta inmediatamente después de la fase actual del Event Loop.
   ```javascript
   process.nextTick(() => {
       console.log('3. Idle, prepare phase simulated with process.nextTick');
   });
   ```

5. **Fase de Check:** Esta fase se encarga de ejecutar los callbacks de `setImmediate`. Estos callbacks los podemos entender como "verificaciones" que se realizan después de la fase de poll.
   - `setImmediate` se utiliza para programar un callback que se ejecutará después de que la fase de poll haya terminado.
   ```javascript
   setImmediate(() => {
       console.log('4. Check phase: setImmediate');
   });
   ```

6. **Fase de Poll:** Esta fase es muy importante, puesto que es donde se lleva a cabo la mayor parte del trabajo en Node.js, incluyendo la ejecución de callbacks de operaciones de I/O. Aqui, se espera a que las operaciones de I/O se completen y se ejecuten sus callbacks.
   - Otra llamada a `fs.readFile` se utiliza para simular otra operación de I/O, cuyo callback se ejecuta en la fase de poll.
   ```javascript
   fs.readFile('/dev/random', () => {
       console.log('5. Poll phase: reading random data');
   });
   ```

7. **Fase de Close Callbacks:** Esta fase se encarga de ejecutar los callbacks de `close` (por ejemplo, en los sockets). Aquí, se ejecutan los callbacks de `setTimeout` que se han completado.
   - `setTimeout` se utiliza nuevamente para simular un callback de cierre.
   ```javascript
   setTimeout(() => {
       console.log('6. Close callbacks phase');
   }, 0);
   ```

8. **Manejo de Errores y Finalización:**
   - Se configuran manejadores para las señales `SIGINT` y el evento `exit` del proceso.
   ```javascript
   process.on('SIGINT', () => {
       console.log('Gracefully shutting down from SIGINT (Ctrl+C)');
       process.exit();
   });

   process.on('exit', (code) => {
       console.log(`About to exit with code: ${code}`);
   });
   ```

## Ejecución del Código

Al ejecutar este código, deberías ver una secuencia de mensajes en la consola que muestran cuándo se ejecuta cada tipo de callback, demostrando así las diferentes fases del Event Loop en Node.js. Además, puedes interactuar con el servidor Express a través de las rutas definidas para ver el procesamiento asincrónico en acción.
