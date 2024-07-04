
# Diferencias Clave entre Funciones en JavaScript

## Funciones Declaradas

### Definición
Las funciones declaradas son aquellas definidas con la palabra clave `function` y tienen un nombre explícito.

### Ejemplo
```javascript
function suma(a, b) {
    return a + b;
}
```

### Características
- **Hoisting**: Las funciones declaradas se "elevan" al principio de su contexto de ejecución, lo que significa que pueden ser llamadas antes de ser definidas en el código.
- **`this`**: El valor de `this` en las funciones declaradas depende de cómo se llame a la función.
- **Ámbito**: Las funciones declaradas tienen ámbito de función, es decir, el `this` dentro de ellas se refiere al objeto global (en un navegador, `window`) cuando no se llama como método de un objeto.

## Funciones Expresadas

### Definición
Las funciones expresadas son aquellas que se asignan a una variable. Estas funciones pueden ser anónimas o nombradas.

### Ejemplo
```javascript
const suma = function(a, b) {
    return a + b;
};
```

### Características
- **Hoisting**: Las funciones expresadas no se elevan. Esto significa que no se pueden llamar antes de que la definición de la función sea evaluada.
- **`this`**: Similar a las funciones declaradas, el valor de `this` depende de cómo se llame a la función.
- **Ámbito**: Tienen el mismo ámbito que las funciones declaradas.

## Funciones Flecha

### Definición
Las funciones flecha son una forma más concisa de escribir funciones en JavaScript y se introdujeron en ES6.

### Ejemplo
```javascript
const suma = (a, b) => a + b;
```

### Características
- **Hoisting**: Las funciones flecha no se elevan, similar a las funciones expresadas.
- **`this`**: Las funciones flecha no tienen su propio `this`. En su lugar, heredan el `this` del contexto en el que fueron definidas.
- **Ámbito**: Tienen un ámbito léxico, lo que significa que `this` está determinado por el entorno de ejecución en el que se definen.

## Comparación de `this`

- **Funciones Declaradas y Expresadas**: El valor de `this` depende de cómo se llama la función.
- **Funciones Flecha**: El valor de `this` es léxico, es decir, está determinado por el contexto en el que la función fue definida.

## Ámbito

- **Funciones Declaradas**: Ámbito de función.
- **Funciones Expresadas**: Ámbito de función.
- **Funciones Flecha**: Ámbito léxico.
