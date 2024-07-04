
# Estructuras de Control de Flujo en JavaScript

## Introducción

Las estructuras de control de flujo en JavaScript permiten controlar el orden en que se ejecutan las declaraciones y se toman decisiones en el código. Aquí se describen las principales estructuras de control de flujo, sus diferencias clave y un ejemplo práctico que las usa todas al mismo tiempo.

## Estructuras de Control de Flujo

### 1. `if`, `else if`, `else`

La estructura `if` se utiliza para ejecutar un bloque de código si una condición es verdadera. `else if` y `else` proporcionan condiciones adicionales y un bloque de código por defecto si ninguna condición es verdadera.

```javascript
let x = 10;

if (x > 10) {
  console.log("Mayor que 10");
} else if (x < 10) {
  console.log("Menor que 10");
} else {
  console.log("Igual a 10");
}
```

### 2. `switch`

La estructura `switch` se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión.

```javascript
let color = "rojo";

switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  default:
    console.log("Color desconocido");
}
```

### 3. `for`

La estructura `for` se utiliza para ejecutar un bloque de código un número específico de veces.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración " + i);
}
```

### 4. `while`

La estructura `while` ejecuta un bloque de código mientras una condición sea verdadera.

```javascript
let i = 0;

while (i < 5) {
  console.log("Iteración " + i);
  i++;
}
```

### 5. `do...while`

La estructura `do...while` ejecuta un bloque de código al menos una vez y luego continúa ejecutándolo mientras una condición sea verdadera.

```javascript
let i = 0;

do {
  console.log("Iteración " + i);
  i++;
} while (i < 5);
```

### 6. `try...catch`

La estructura `try...catch` se utiliza para manejar errores. El bloque `try` contiene el código que puede lanzar una excepción, y el bloque `catch` contiene el código para manejar el error.

```javascript
try {
  let result = someFunction();
  console.log(result);
} catch (error) {
  console.error("Se produjo un error: " + error.message);
}
```

### 7. `break` y `continue`

- `break`: Termina el bucle actual o la sentencia `switch`.
- `continue`: Salta a la siguiente iteración del bucle.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Termina el bucle cuando i es 5
  }
  if (i % 2 === 0) {
    continue; // Salta las iteraciones pares
  }
  console.log("Número impar: " + i);
}
```

## Ejemplo Práctico

Vamos a crear un programa que simule un juego sencillo donde el usuario tiene que adivinar un número entre 1 y 10. Utilizaremos todas las estructuras de control de flujo mencionadas.

```javascript
function adivinaElNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;
  let adivinaste = false;

  while (!adivinaste && intentos < 5) {
    intentos++;
    let adivinanza = parseInt(prompt("Adivina el número (1-10):"), 10);

    if (isNaN(adivinanza)) {
      console.log("Por favor, ingresa un número válido.");
      continue;
    }

    if (adivinanza < 1 || adivinanza > 10) {
      console.log("El número debe estar entre 1 y 10.");
      continue;
    }

    if (adivinanza === numeroSecreto) {
      console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
      adivinaste = true;
    } else {
      if (intentos === 5) {
        console.log("Lo siento, no adivinaste. El número era " + numeroSecreto + ".");
      } else {
        if (adivinanza < numeroSecreto) {
          console.log("El número secreto es mayor.");
        } else {
          console.log("El número secreto es menor.");
        }
      }
    }
  }
}

try {
  adivinaElNumero();
} catch (error) {
  console.error("Se produjo un error en el juego: " + error.message);
}
```

### Explicación del Código

- **`if`, `else if`, `else`**: Utilizados para comprobar las adivinanzas del usuario y proporcionar retroalimentación.
- **`switch`**: No se utiliza directamente aquí, pero podría reemplazar las múltiples condiciones `if`.
- **`for`**: No se utiliza en este ejemplo, pero podría ser usado para iterar sobre un conjunto de intentos predefinidos.
- **`while`**: Mantiene el juego en marcha hasta que el usuario adivine el número o se agoten los intentos.
- **`do...while`**: Podría ser usado para asegurar al menos una iteración del juego.
- **`try...catch`**: Maneja posibles errores en el juego.
- **`break` y `continue`**: `continue` se usa para saltar iteraciones inválidas del bucle.

## Conclusión

Las estructuras de control de flujo son fundamentales para manejar la lógica y el flujo de ejecución en JavaScript. Usarlas adecuadamente ayuda a crear programas eficientes y fáciles de entender. Este ejemplo práctico muestra cómo combinar todas estas estructuras para crear una aplicación interactiva.

