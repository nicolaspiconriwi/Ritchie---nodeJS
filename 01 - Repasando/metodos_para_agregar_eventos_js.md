
# Diferencias Claves entre los Tipos de Eventos en JavaScript

## Métodos para Agregar Eventos

### 1. Desde HTML

Puedes agregar un evento `onclick` directamente en el atributo del elemento HTML:

```html
<button onclick="miFuncion()">Haz clic aquí</button>
```

#### Ventajas:
- Simple y directo para casos rápidos o prototipos.
- Facilita ver qué función se llama directamente en el HTML.

#### Desventajas:
- No es una buena práctica separar HTML y JavaScript.
- Solo puedes asignar una función al evento `onclick`, sobrescribiendo cualquier otra función asignada previamente.

### 2. Usando la Propiedad `onclick` en JavaScript

Puedes asignar una función a la propiedad `onclick` del elemento en JavaScript:

```javascript
document.getElementById('miBoton').onclick = function() {
  alert('Botón clicado!');
};
```

#### Ventajas:
- Mantiene el JavaScript separado del HTML, siguiendo buenas prácticas.
- Fácil de entender y usar para eventos simples.

#### Desventajas:
- Como con el método en HTML, solo puedes asignar una función al evento `onclick`. Si asignas otra función más tarde, sobrescribirá la anterior.

### 3. Usando `addEventListener`

Puedes usar `addEventListener` para agregar un evento `click`:

```javascript
document.getElementById('miBoton').addEventListener('click', function() {
  alert('Botón clicado!');
});
```

#### Ventajas:
- Puedes agregar múltiples eventos del mismo tipo a un solo elemento sin sobrescribir los anteriores.
- Proporciona más control sobre la propagación de eventos (bubbling y capturing).
- Es la forma más flexible y moderna de manejar eventos en JavaScript.

#### Desventajas:
- Puede ser un poco más verboso que los métodos anteriores.
- Requiere conocer más sobre el modelo de eventos de JavaScript.

### Ejemplo de Uso de `addEventListener`

```javascript
let boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
  alert('Primera función de clic');
});
boton.addEventListener('click', function() {
  alert('Segunda función de clic');
});
```

En este ejemplo, ambos `alert` se mostrarán cuando se haga clic en el botón, demostrando la capacidad de agregar múltiples manejadores de eventos sin sobrescribir los anteriores.

## `dispatchEvent`

El método `dispatchEvent` se utiliza para disparar manualmente un evento en un elemento. Esto puede ser útil para probar o para simular eventos.

### Ejemplo de Uso de `dispatchEvent`

```javascript
let evento = new Event('build');
let elemento = document.getElementById('miElemento');

// Escuchar el evento
elemento.addEventListener('build', function(e) {
  console.log('El evento build fue disparado!');
});

// Disparar el evento
elemento.dispatchEvent(evento);
```

#### Ventajas:
- Útil para pruebas y simulaciones de eventos.
- Permite un control completo sobre cuándo y cómo se disparan los eventos.

#### Desventajas:
- Puede ser innecesariamente complejo para casos simples.
- Requiere una comprensión clara del modelo de eventos y de cuándo usarlo apropiadamente.

## Comparación de Métodos

| Método                          | Ventajas                                                       | Desventajas                                                |
|---------------------------------|----------------------------------------------------------------|------------------------------------------------------------|
| HTML                            | Simple y directo, fácil de ver qué función se llama.           | No sigue buenas prácticas de separación de concerns, solo una función por evento. |
| `onclick` en JavaScript         | Mantiene HTML y JavaScript separados, fácil de usar.           | Solo una función por evento, sobrescribe eventos anteriores. |
| `addEventListener` en JavaScript | Permite múltiples eventos, más control sobre propagación.      | Más verboso, requiere más conocimiento sobre el modelo de eventos. |
| `dispatchEvent`                 | Útil para pruebas y simulaciones de eventos, control completo. | Puede ser innecesariamente complejo, requiere comprensión del modelo de eventos. |
