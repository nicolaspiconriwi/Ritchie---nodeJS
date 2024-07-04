
# Hoisting en JavaScript

## Introducción

El concepto de **hoisting** en JavaScript se refiere a cómo el intérprete de JavaScript maneja la declaración de variables y funciones antes de ejecutar el código. Comprender el hoisting es esencial para evitar errores y escribir código más predecible.

## Objetivos de Aprendizaje

1. **Conocimiento**: Definir y describir el concepto de hoisting en JavaScript.
2. **Comprensión**: Explicar cómo el hoisting afecta la ejecución del código.
3. **Aplicación**: Identificar ejemplos prácticos donde el hoisting impacta el comportamiento del código.
4. **Análisis**: Comparar el comportamiento de variables declaradas con `var`, `let` y `const` en relación con el hoisting.
5. **Síntesis**: Crear ejemplos de código que demuestren los efectos del hoisting.
6. **Evaluación**: Evaluar y corregir código que tenga errores debido al hoisting.

## Definición de Hoisting

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se "elevan" al principio de su contexto de ejecución, ya sea una función o el contexto global.

## Ejemplo con `var`

### Código
```javascript
console.log(miVariable); // undefined
var miVariable = 10;
console.log(miVariable); // 10
```

### Explicación
En el ejemplo anterior, la declaración de `miVariable` se eleva al principio del contexto, pero su inicialización no. Por eso, la primera `console.log` muestra `undefined`.

## Ejemplo con `let` y `const`

### Código
```javascript
console.log(miLet); // ReferenceError: Cannot access 'miLet' before initialization
let miLet = 20;

console.log(miConst); // ReferenceError: Cannot access 'miConst' before initialization
const miConst = 30;
```

### Explicación
A diferencia de `var`, las variables declaradas con `let` y `const` no se inicializan hasta que la declaración en el código es evaluada. Esto resulta en un `ReferenceError` si se intenta acceder a ellas antes de su declaración.

## Hoisting de Funciones

### Código
```javascript
miFuncion(); // "Hola desde miFuncion"

function miFuncion() {
    console.log("Hola desde miFuncion");
}
```

### Explicación
Las declaraciones de funciones también se elevan, lo que permite llamar a la función antes de su declaración en el código.

## Resumen

El hoisting es un concepto fundamental en JavaScript que afecta cómo y cuándo se pueden utilizar variables y funciones en el código. Comprender cómo funciona el hoisting ayuda a evitar errores comunes y a escribir código más claro y predecible.

## Actividades

1. **Identificación**: Encuentra y explica ejemplos de hoisting en un código proporcionado.
2. **Corrección**: Refactoriza un código con errores de hoisting para que funcione correctamente.
3. **Creación**: Escribe un programa que utilice correctamente el hoisting para inicializar variables y funciones.

## Evaluación

Revisa tu comprensión del hoisting evaluando varios fragmentos de código y explicando cómo se comportan debido al hoisting. Corrige los errores encontrados y justifica tus cambios.
