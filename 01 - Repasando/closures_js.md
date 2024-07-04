
# Closures en JavaScript

## Introducción

Los **closures** son una característica poderosa y única de JavaScript que permite a las funciones acceder a variables de su ámbito exterior incluso después de que la función exterior haya terminado de ejecutarse. Comprender los closures es esencial para dominar JavaScript y escribir código eficiente y modular.

## Objetivos de Aprendizaje

1. **Conocimiento**: Definir y describir el concepto de closures en JavaScript.
2. **Comprensión**: Explicar cómo y por qué los closures funcionan.
3. **Aplicación**: Utilizar closures en ejemplos prácticos para gestionar el estado y crear funciones más dinámicas.
4. **Análisis**: Identificar y corregir problemas comunes relacionados con los closures.
5. **Síntesis**: Crear ejemplos de código que demuestren el uso de closures para resolver problemas específicos.
6. **Evaluación**: Evaluar la eficiencia y utilidad de los closures en diferentes contextos de programación.

## Definición de Closures

Un closure es la combinación de una función y el ámbito léxico en el que se declaró dicha función. Esto permite que la función tenga acceso a variables del ámbito exterior incluso después de que dicho ámbito haya finalizado.

## Ejemplo Básico

### Código
```javascript
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

const contador2 = crearContador();
console.log(contador2()); // 1
console.log(contador2()); // 2
```

### Explicación
En el ejemplo anterior, `crearContador` es una función que devuelve otra función. La función interna tiene acceso a la variable `contador` del ámbito exterior, creando un closure. Cada vez que se llama a `contador1`, la variable `contador` se incrementa y su valor se mantiene entre llamadas.

## Uso de Closures para Datos Privados

### Código
```javascript
function crearPersona(nombre) {
    return {
        getNombre: function() {
            return nombre;
        },
        setNombre: function(nuevoNombre) {
            nombre = nuevoNombre;
        }
    };
}

const persona = crearPersona('Juan');
console.log(persona.getNombre()); // Juan
persona.setNombre('Carlos');
console.log(persona.getNombre()); // Carlos
```

### Explicación
En este ejemplo, `crearPersona` devuelve un objeto con dos métodos que permiten acceder y modificar la variable `nombre`. La variable `nombre` es privada y solo se puede acceder a ella a través de los métodos `getNombre` y `setNombre`.

## Closures en Bucles

### Código
```javascript
for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
```

### Explicación
En el ejemplo anterior, cada función pasada a `setTimeout` captura el valor de `i` en el momento en que se creó la función. Esto resulta en que los números del 1 al 5 se imprimen con un segundo de diferencia.

## Resumen

Los closures son una herramienta poderosa en JavaScript que permiten crear funciones con estado y encapsular datos de manera efectiva. Entender y utilizar closures correctamente puede llevar a escribir código más limpio, modular y eficiente.

## Actividades

1. **Identificación**: Encuentra y explica ejemplos de closures en un código proporcionado.
2. **Corrección**: Refactoriza un código para utilizar closures de manera efectiva.
3. **Creación**: Escribe un programa que utilice closures para gestionar el estado de una aplicación pequeña.

## Evaluación

Revisa tu comprensión de los closures evaluando varios fragmentos de código y explicando cómo y por qué funcionan. Corrige los errores encontrados y justifica tus cambios.
