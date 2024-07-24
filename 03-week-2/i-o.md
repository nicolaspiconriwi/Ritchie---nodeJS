
# Operaciones de Entrada/Salida (I/O) en Node.js

Las operaciones de entrada/salida (I/O operations) a las que se refiere Node.js en este contexto son todas aquellas operaciones que implican interactuar con recursos externos al proceso principal de Node.js, como por ejemplo:

1. **Operaciones de red**:
   - Conexiones HTTP/HTTPS
   - Conexiones TCP/UDP
   - Conexiones WebSocket

2. **Operaciones de archivo**:
   - Lectura de archivos
   - Escritura de archivos
   - Eliminación de archivos
   - Renombrado de archivos
   - Operaciones en directorios (lectura de contenidos, creación, eliminación, etc.)

3. **Operaciones de sistema**:
   - Interacción con el sistema operativo para ejecutar comandos
   - Lectura de variables de entorno
   - Manipulación de procesos (creación, terminación, etc.)

4. **Operaciones de base de datos**:
   - Consultas a bases de datos (SQL, NoSQL)
   - Conexiones y transacciones con bases de datos

5. **Operaciones de entrada/salida estándar**:
   - Lectura desde la entrada estándar (stdin)
   - Escritura a la salida estándar (stdout)
   - Escritura a la salida de errores estándar (stderr)

Estas operaciones, al ser gestionadas por el sistema kernel y ser manejadas de manera asincrónica por el event loop de Node.js, permiten que el proceso principal no se bloquee y pueda continuar ejecutando otras tareas mientras espera la finalización de las operaciones I/O.

# I/O en Node.js
