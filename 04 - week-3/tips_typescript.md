
# Tips en TypeScript

## Debugging en TypeScript

### Uso de `console.log`
- Inserta declaraciones `console.log` para imprimir el valor de las variables y el flujo del programa.
- Ejemplo:
  ```typescript
  const value: number = 10;
  console.log("Valor:", value);
  ```

### Source Maps
- Habilita los Source Maps en tu `tsconfig.json` para facilitar el debug.
- Ejemplo:
  ```json
  {
    "compilerOptions": {
      "sourceMap": true
    }
  }
  ```
- Esto te permitirá ver el código TypeScript original en las herramientas de desarrollo del navegador o en VS Code.

### Uso de Breakpoints
- Utiliza los breakpoints en tu editor de código (como VS Code) para pausar la ejecución y examinar el estado actual del programa.
- Coloca un breakpoint en la línea deseada y ejecuta el programa en modo debug.

### Depuración en Node.js
- Usa la opción `--inspect` para depurar aplicaciones Node.js escritas en TypeScript.
- Ejemplo:
  ```bash
  node --inspect dist/app.js
  ```
- Esto te permitirá conectar las herramientas de desarrollo del navegador para depurar el código.

## Manejando Errores en TypeScript

### Tipado Estricto
- Habilita el tipado estricto en tu `tsconfig.json` para evitar errores comunes.
- Ejemplo:
  ```json
  {
    "compilerOptions": {
      "strict": true
    }
  }
  ```

### Manejo de Excepciones
- Usa bloques `try-catch` para manejar excepciones de manera adecuada.
- Ejemplo:
  ```typescript
  try {
    // Código que puede lanzar una excepción
  } catch (error) {
    console.error("Error:", error);
  }
  ```

## Buenas Prácticas en TypeScript

### Comentarios y Documentación
- Documenta tu código usando comentarios y JSDoc.
- Ejemplo:
  ```typescript
  /**
   * Suma dos números.
   * @param a - El primer número.
   * @param b - El segundo número.
   * @returns La suma de `a` y `b`.
   */
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

### Organización del Código
- Organiza tu código en módulos y archivos separados para mejorar la mantenibilidad.
- Usa la convención de nombres adecuada para archivos, clases y funciones.

### Linter y Formateo de Código
- Usa ESLint y Prettier para mantener un estilo de código consistente.
- Configura las reglas de linting en el archivo `.eslintrc.json` y las opciones de formateo en `.prettierrc`.

### Uso de Interfaces y Tipos
- Define interfaces y tipos para estructuras de datos complejas.
- Ejemplo:
  ```typescript
  interface User {
    id: number;
    name: string;
    email: string;
  }
  ```

### Utilización de Async/Await
- Maneja código asincrónico usando `async` y `await` para una sintaxis más limpia.
- Ejemplo:
  ```typescript
  async function fetchData(): Promise<void> {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  ```
