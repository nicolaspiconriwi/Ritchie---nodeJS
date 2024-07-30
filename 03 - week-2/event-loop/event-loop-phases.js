const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

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

// Fase de pending callbacks, generalmente se refieren a callbacks de operaciones de I/O
// Osea, callbacks de funciones como fs.readFile, http.get, socket.on, etc.
// Generalmente son operations completadas por el sistema operativo y no por el runtime de JS
// Es por esto que se ejecutan en una fase separada.
// Se puede comparar con un callback de una promesa, que se ejecuta en el microtask queue.
fs.readFile(__filename, () => {
    console.log('2. Pending callbacks phase: readFile callback');
    
    // Fase de close callbacks
    setTimeout(() => {
        console.log('6. Close callbacks phase');
    }, 0);

        // Fase de check
    setImmediate(() => {
        console.log('4. Check phase: setImmediate');
    });
    
    // Usado internamente, no podemos demostrar idle y prepare directamente.
    // Para simular esta fase, podemos usar process.nextTick()
    process.nextTick(() => {
        console.log('3. Idle, prepare phase simulated with process.nextTick');
    });
});

// Fase de poll, esta fase se ejecuta justo después de la fase de timers
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

<<<<<<< Updated upstream:03 - week-2/event-loop/event-loop-phases.js
console.log("hola mundo");
=======
>>>>>>> Stashed changes:03-week-2/event-loop/event-loop-phases.js
