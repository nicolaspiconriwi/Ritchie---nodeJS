# Introducción a TypeScript

## Título:
**Introducción a TypeScript**

## Introducción:
En este documento, exploraremos los conceptos fundamentales de TypeScript, un superset de JavaScript que añade tipado estático y otras características avanzadas. Este taller está diseñado para desarrolladores que desean mejorar sus habilidades en JavaScript mediante el uso de TypeScript, optimizando sus proyectos con buenas prácticas y herramientas modernas.

## Objetivos:
1. Comprender los fundamentos de TypeScript y su sintaxis básica.
2. Aprender a configurar un proyecto de TypeScript.
3. Aplicar buenas prácticas en la gestión de dependencias y configuración de herramientas.
4. Implementar conceptos avanzados como clases, interfaces, y asincronía en TypeScript.
5. Reflexionar sobre las diferencias y ventajas de usar TypeScript en proyectos de JavaScript.

## Instrucciones de entrega:
1. Completa los ejercicios y casos de uso presentados en cada sección.
2. Sube tu proyecto final a un repositorio de GitHub.
3. Comparte el enlace del repositorio en moodle en la sección habilitada para las entregas.

## Teoría y Práctica

### 1. Introducción teórica a TypeScript
#### Introducción:
TypeScript es un lenguaje de programación desarrollado por Microsoft que extiende JavaScript añadiendo tipos estáticos. Su uso mejora la robustez y mantenibilidad del código. Es un lenguaje transpilado, lo que significa que se compila a JavaScript para ser ejecutado en cualquier navegador o entorno.

Chicos, desde ya les digo, piensen en Typescript no como tu enemigo, sino como tu mejor amigo. Es un lenguaje que te ayudará a evitar errores comunes en JavaScript, a mejorar la calidad de tu código y a facilitar el mantenimiento de tus proyectos. Además, TypeScript es compatible con la mayoría de las librerías y frameworks de JavaScript, por lo que puedes integrarlo fácilmente en tus proyectos existentes.

#### Ejemplo:
```typescript
const greet = (name: string): string => {
    return `Hello, ${name}`;
};

console.log(greet("World"));
```

#### Caso de uso:

¿Qué es el tipado estático y por qué es importante en TypeScript?

El tipado estático es la capacidad de definir tipos de datos para variables, parámetros de funciones y valores de retorno. En proyectos a gran escala, el tipado estático de TypeScript beneficia a los equipos de desarrollo de la siguiente manera:

- **Prevención de errores**: Los tipos estáticos ayudan a detectar errores en tiempo de compilación.
- **Mejor documentación**: Los tipos claros y explícitos sirven como documentación del código.
- **Mejor rendimiento**: TypeScript puede optimizar el código basado en los tipos definidos.
- **Mejor mantenibilidad**: Los tipos estáticos facilitan la refactorización y el mantenimiento del código.
- **Mejor autocompletado**: Los editores de código pueden proporcionar sugerencias y autocompletado basados en los tipos.
- **Mejor legibilidad**: Los tipos explícitos hacen que el código sea más fácil de entender para otros desarrolladores.
- **Mejor escalabilidad**: Los tipos estáticos permiten escalar el código de manera más eficiente.
- **Mejor integración**: TypeScript se integra fácilmente con herramientas de desarrollo y librerías populares.

### 2. Pre-requisitos (Node, npm, Git)
#### Introducción:
Antes de comenzar, asegúrate de tener instalados Node.js, npm (Node Package Manager) y Git en tu sistema.

#### Ejemplo:
```bash
# Verificar versiones
node -v
npm -v
git --version
```

#### Caso de uso:
Estas herramientas son esenciales para la gestión de dependencias, control de versiones y ejecución de proyectos TypeScript.

### 3. Inicialización de proyecto TypeScript

#### Introducción:
Inicializar un proyecto de TypeScript de manera correcta asegura un buen punto de partida para el desarrollo. Recordemos que al typescript ser un lenguaje transpilado, necesitamos configurar nuestro proyecto para que pueda ser compilado a JavaScript. En proyectos JavaScript tradicionales, solamente con el comando node index.js es suficiente para ejecutar nuestro código, pero en proyectos TypeScript, necesitamos compilar nuestro código a JavaScript antes de ejecutarlo.

#### Ejemplo de iniciacion de proyecto:
```bash
# Inicializar un nuevo proyecto
npm init -y
npm install typescript --save-dev
npx tsc --init
nano index.ts
```

#### Exploremos los comandos utilizados:

- `npm init -y`: Inicializa un nuevo proyecto de Node.js con la configuración predeterminada. Hasta este punto chicos, lo hemos usado tantas veces que ya es parte de nuestra vida.
- `npm install typescript --save-dev`: Instala TypeScript como una dependencia de desarrollo en el proyecto. Esto nos permitirá compilar nuestro código TypeScript a JavaScript. A este punto, puedes estarte preguntando, cual es la diferencia entre -D y --save-dev, pues la respuesta es que son lo mismo, solo que -D es una forma abreviada de --save-dev.
- `npx tsc --init`: Entendamos este comando como el que nos permitirá configurar nuestro proyecto de TypeScript. Al ejecutarlo, se creará un archivo `tsconfig.json` con la configuración inicial.
- ***Explicación del archivo tsconfig.json***: Este archivo de configuración contiene las opciones y ajustes para el compilador de TypeScript. Es un archivo json común que se puede editar manualmente para personalizar la configuración global del proyecto en lo que respecta a TypeScript. Te recomiendo leer el siguiente documento de [referencia](tsconfig_explicado.md) para entender mejor cada una de las opciones.

#### Caso de uso:

En mi experiencia como desarrollador frontend, backend y desktop (con [electron](https://www.electronjs.org/)) en el stack JavaScript, he encontrado numerosas malas prácticas en JavaScript, especialmente cuando se trata de verificar los tipos de las funciones, variables y objetos. A continuación se presenta un ejemplo de código en JavaScript que ilustra estos problemas:


```javascript
// Ejemplo de JavaScript con malas prácticas

function add(a, b) {
    return a + b; // No hay verificación de tipos, puede causar errores si a o b no son números
}

let age = "30"; // El tipo de dato es inconsistente, puede causar problemas en cálculos posteriores

console.log(add(10, 20)); // Resultado esperado: 30
console.log(add(10, "20")); // Resultado inesperado: "1020"
console.log(add("10", "20")); // Resultado inesperado: "1020"
```

Este tipo de código puede llevar a errores difíciles de depurar y a comportamientos inesperados en la aplicación. Ahora, veamos cómo TypeScript puede ayudar a evitar estos problemas proporcionando verificación de tipos y mejorando la claridad del código:

```typescript
// Ejemplo de TypeScript con buenas prácticas

function add(a: number, b: number): number {
    return a + b; // El compilador de TypeScript verificará que a y b sean números
}

let age: number = 30; // El tipo de dato es consistente, evitando errores en cálculos posteriores

console.log(add(10, 20)); // Resultado esperado: 30
// console.log(add(10, "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'
// console.log(add("10", "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'
```

#### Ahora practica tú con este ejercicio:
- Inicializa un nuevo proyecto de TypeScript con los comandos mencionados anteriormente. Deberias tener una estructura de archivos similar a la siguiente:

```bash
├── node_modules
├── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

#### Preguntas de reflexión:
- ¿Cómo influye una buena configuración inicial en el desarrollo de un proyecto?
- ¿Qué ventajas ofrece TypeScript en comparación con JavaScript puro?
- ¿Por qué es importante verificar los tipos de datos en un proyecto de software?

## Conceptos de Programación en TypeScript

### 1. Variables y constantes: Tipos, Tipos personalizados
#### Introducción:
En TypeScript, las variables y constantes pueden tener tipos explícitos, lo que ayuda a evitar errores comunes en el manejo de datos.

#### Ejemplo:
```typescript
let age: number = 30;
const name: string = "Alice";
type User = {
  id: number;
  username: string;
};
```

#### Caso de uso:
Definir tipos personalizados mejora la claridad y seguridad del código, especialmente en proyectos grandes.

#### Ahora practica tú con estos ejercicios:
- Crea un tipo personalizado para un objeto `Producto` con propiedades `id`, `nombre`, y `precio`.

#### Pregunta de reflexión:
- ¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?

### 2. Operadores (aritméticos, booleanos)
#### Introducción:
Los operadores en TypeScript permiten realizar operaciones matemáticas y lógicas con mayor precisión debido al tipado.

#### Ejemplo:
```typescript
let sum: number = 5 + 10;
let isValid: boolean = sum > 10 && sum < 20;
```

#### Caso de uso:
Utilizar operadores con tipos definidos ayuda a prevenir errores lógicos y matemáticos.

#### Ahora practica tú con este ejercicio:
- Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.

#### Pregunta de reflexión:
- ¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?

### 3. Estructuras de decisión (if, switch, ternarios)
#### Introducción:
Las estructuras de decisión controlan el flujo de ejecución de un programa basado en condiciones específicas.

#### Ejemplo:
```typescript
let value: number = 10;
if (value > 5) {
  console.log("Value is greater than 5");
} else {
  console.log("Value is 5 or less");
}

switch (value) {
  case 10:
    console.log("Value is 10");
    break;
  default:
    console.log("Value is not 10");
}
```

#### Caso de uso:
El uso correcto de estructuras de decisión mejora la lógica y legibilidad del código.

#### Ahora practica tú con este ejercicio:
- Implementa una función que clasifique un número en positivo, negativo o cero usando if y switch.

#### Pregunta de reflexión:
- ¿Cuándo es preferible usar un operador ternario en lugar de una estructura if?

### 4. Estructuras de iteración (while, for, foreach, map)
#### Introducción:
Las estructuras de iteración permiten ejecutar un bloque de código múltiples veces basándose en una condición o colección.

#### Ejemplo:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));
let squares = numbers.map(num => num * num);
```

#### Caso de uso:
Iterar sobre colecciones de datos es una operación común que debe manejarse eficientemente.

#### Ahora practica tú con este ejercicio:
- Implementa una función que recorra un array de nombres y los imprima en consola.

#### Pregunta de reflexión:
- ¿Qué ventajas tiene el método `map` sobre un bucle for en TypeScript?


# Estructuras de Datos y Funciones

## 1. Arrays | Listas

### Introducción
Los arrays son colecciones ordenadas de elementos que pueden ser de cualquier tipo. En TypeScript, los arrays pueden ser definidos con un tipo específico para asegurar que todos los elementos cumplan con el tipo especificado, lo cual mejora la robustez y la legibilidad del código.

### Ejemplo
```typescript
let fruits: string[] = ["apple", "banana", "cherry"];
```

### Caso de uso
Los arrays son ampliamente utilizados para almacenar y manipular conjuntos de datos. Son esenciales en muchas aplicaciones como listas de tareas, colecciones de productos, y más.

### Ejercicio Práctico
- **Tarea 1:** Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
- **Tarea 2:** Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
- **Tarea 3:** Define un array de objetos `User` con propiedades `id` y `name`, e imprime el nombre de cada usuario en consola.
- **Tarea 4:** Implementa una función que reciba un array de números y retorne el mayor valor.

### Pregunta de reflexión
- **Pregunta:** ¿Cómo se puede asegurar el tipo de datos en un array en TypeScript?

## 2. Objetos

### Introducción
Los objetos en TypeScript son colecciones de pares clave-valor que representan entidades y sus propiedades. Utilizando interfaces o tipos personalizados, se puede definir la estructura exacta de estos objetos, lo cual ayuda a prevenir errores y a documentar el código de manera efectiva.

### Ejemplo
```typescript
interface User {
  id: number;
  name: string;
}
let user: User = { id: 1, name: "John" };
```

### Caso de uso
Los objetos son ideales para modelar datos complejos como usuarios, productos, órdenes, etc., permitiendo una representación estructurada y fácil de manipular.

### Ejercicio Práctico
- **Tarea:** Define un objeto `Car` con propiedades `marca`, `modelo` y `año`. Crea una instancia de `Car` e imprime sus propiedades en consola.
- **Tarea 2:** Con base en el objeto `Car`, crea una clase que posea un metodo estatico que reciba un objeto `Car` y retorne un string con la información del carro.
- **Tarea 3:** Implementa una función que reciba un objeto `Car` y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

### Pregunta de reflexión
- **Pregunta:** ¿Qué ventajas ofrece el uso de tipos personalizados en objetos?

## 3. Funciones

### Introducción
Las funciones son bloques de código reutilizables que encapsulan una lógica específica. En TypeScript, se pueden definir tipos para los parámetros y el valor de retorno de las funciones, mejorando así la claridad y la seguridad del código.

### Ejemplo
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

### Caso de uso
Las funciones son esenciales para la modularidad y la reutilización del código. Permiten dividir la lógica en unidades manejables y reutilizables, facilitando el mantenimiento y la prueba del código.

### Ejercicio Práctico
- **Tarea:** Implementa una función que reciba un array de números y retorne el mayor valor.
- **Tarea 2:** Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.
- **Tarea 3:** Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario. (2 Riwi points)

### Pregunta de reflexión
- **Pregunta:** ¿Qué beneficios ofrece la definición explícita de tipos en las funciones en TypeScript?

## Conclusión
En esta guía, hemos explorado las estructuras de datos fundamentales y las funciones en TypeScript. Hemos aprendido a definir y utilizar arrays, objetos y funciones con tipos explícitos, lo que mejora la robustez y la claridad del código. Los ejercicios y preguntas de reflexión proporcionados deben ayudarte a consolidar tu comprensión y aplicar estos conceptos en tus propios proyectos.

## Clases, Interfaces, metodos, constructores, Pilares de la POO

#### Introducción:

Las clases son plantillas para crear objetos que comparten propiedades y métodos. En TypeScript, las clases pueden:

- Definir propiedades y métodos.
- Extender otras clases.
- Implementar interfaces.
- Utilizar modificadores de acceso (public, private, protected).
- Utilizar constructores para inicializar objetos.
- Utilizar métodos estáticos y de instancia.
- Utilizar propiedades de solo lectura y de solo escritura.
- Utilizar herencia y polimorfismo.
- Utilizar decoradores para añadir metadatos a las clases.

#### Ejemplo de una clase en TypeScript:

```typescript
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

let person = new Person("Alice", 30);
console.log(person.greet());
```

Repasemos un poco el ejemplo anterior:

- La clase `Person` define dos propiedades privadas `name` y `age`. A diferencia de JavaScript, TypeScript permite definir modificadores de acceso como `private`, `protected` y `public`. Puedes leer más sobre esto en el documento de [modificadores de acceso](modificadores_acceso.md).
- El constructor de la clase `Person` inicializa las propiedades `name` y `age` con los valores proporcionados al crear una nueva instancia de la clase.
- El método `greet` de la clase `Person` devuelve un saludo personalizado con el nombre y la edad de la persona.
- Se crea una nueva instancia de la clase `Person` con el nombre "Alice" y la edad 30, y se llama al método `greet` para mostrar el saludo en la consola.

Como puedes ver, hasta ahora TypeScript se ve muy similar a JavaScript, pero con la ventaja de tener tipado estático y otras características avanzadas que veremos más adelante.

#### Herencia de Clases:

Una de las características más poderosas de las clases en TypeScript es la capacidad de heredar propiedades y métodos de una clase base. Esto permite reutilizar código y definir jerarquías de clases.

```typescript
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): string {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak(): string {
    return `${this.name} barks.`;
  }
}

let dog = new Dog("Buddy");

console.log(dog.speak()); // Output: Buddy barks.
```

En este ejemplo, la clase `Dog` hereda de la clase `Animal` y sobrescribe el método `speak` para que un perro haga ladridos en lugar de un sonido genérico. La palabra clave `extends` se utiliza para establecer la relación de herencia entre las clases.

#### Interfaces:

Las interfaces en TypeScript son contratos que definen la estructura de un objeto. Pueden contener propiedades, métodos y constructores que deben ser implementados por las clases que las utilizan.

```typescript
interface Shape {
  area(): number;
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

let circle = new Circle(5);
console.log(circle.area()); // Output: 78.54
```

Las interfaces no son un concepto meramente de typescript, sino que son un concepto de la programación orientada a objetos. En este ejemplo, la interfaz `Shape` define un método `area` que debe ser implementado por cualquier clase que la utilice. La clase `Circle` implementa la interfaz `Shape` y proporciona una implementación del método `area` para calcular el área de un círculo. Es por eso que se entiende a las interfaces como contratos que deben ser cumplidos por las clases que las implementan. Esto permite definir una estructura común para los objetos y garantizar que las clases cumplan con ciertas reglas y comportamientos. Además, las interfaces sirven para:

- **Definir contratos**: Las interfaces definen la estructura de un objeto y los métodos que deben ser implementados.
- **Establecer reglas**: Las interfaces establecen reglas y restricciones para las clases que las implementan.
- **Promover la cohesión**: Las interfaces promueven la cohesión y el acoplamiento débil entre las clases. Recordemos que cohesion es la medida en la que los métodos de una clase están relacionados entre sí. Y el acoplamiento débil es la medida en la que una clase depende de otra clase. La D en SOLID, que significa Dependency Inversion Principle, nos dice que las clases deben depender de abstracciones y no de implementaciones concretas. Por ejemplo:

##### Ejemplo de Principio de Inversión de Dependencias (DIP) en TypeScript

###### Definición de la Interfaz

Definimos una interfaz que actúa como la abstracción a la que las clases dependerán.

```typescript
interface NotificationService {
  sendNotification(message: string): void;
}
```

###### Implementaciones Concretas de la Interfaz

Creamos implementaciones concretas de esta interfaz.

```typescript
class EmailNotificationService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending email notification: ${message}`);
  }
}

class SMSNotificationService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending SMS notification: ${message}`);
  }
}
```

###### Clase que Depende de la Interfaz

Creamos una clase que depende de la interfaz `NotificationService`, demostrando el DIP.

```typescript
class OrderService {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  placeOrder(orderId: string): void {
    // Lógica para realizar el pedido
    console.log(`Order ${orderId} placed.`);
    this.notificationService.sendNotification(`Order ${orderId} has been placed.`);
  }
}
```

##### Uso de la Clase con Diferentes Implementaciones

Mostramos cómo `OrderService` puede utilizar diferentes implementaciones de `NotificationService`.

```typescript
const emailService = new EmailNotificationService();
const smsService = new SMSNotificationService();

const orderServiceWithEmail = new OrderService(emailService);
orderServiceWithEmail.placeOrder("1234");

const orderServiceWithSMS = new OrderService(smsService);
orderServiceWithSMS.placeOrder("5678");
```

###### Explicación

1. **Promoción de la Inversión de Dependencias**: `OrderService` depende de la abstracción `NotificationService` en lugar de una implementación concreta (`EmailNotificationService` o `SMSNotificationService`). Esto sigue el principio de inversión de dependencias.

2. **Desacoplamiento**: Al depender de una interfaz, `OrderService` no está acoplada a detalles específicos de cómo se envía la notificación. Esto permite cambiar la implementación de `NotificationService` sin modificar `OrderService`.

3. **Flexibilidad y Mantenibilidad**: Podemos introducir nuevas implementaciones de `NotificationService` (por ejemplo, `PushNotificationService`) sin cambiar el código de `OrderService`, mejorando así la flexibilidad y mantenibilidad del sistema.

Este ejemplo ilustra cómo aplicar el Principio de Inversión de Dependencias (DIP) en TypeScript, promoviendo el desacoplamiento y la flexibilidad en el diseño del software.

- **Facilitar la reutilización**: Las interfaces facilitan la reutilización del código al definir una estructura común para los objetos.
- **Mejorar la legibilidad**: Las interfaces mejoran la legibilidad del código al proporcionar una descripción clara de la estructura de los objetos.

#### Metodos estaticos:

Los métodos estáticos son funciones asociadas a la clase en lugar de una instancia específica de la clase. Pueden ser llamados directamente en la clase sin necesidad de crear una instancia.

```typescript

class MathUtils {
  static sum(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.sum(5, 10)); // Output: 15

```

En este ejemplo, el método `sum` de la clase `MathUtils` es estático y puede ser llamado directamente en la clase sin necesidad de crear una instancia. Esto es útil para definir funciones de utilidad que no dependen de un estado específico de la clase. Y que quiero decir con esto ultimo? que no necesitas tener una instancia de la clase para poder usar el metodo, simplemente lo llamas directamente desde la clase.

Muchos alumnos me preguntan: ¿Cuándo debo usar métodos estáticos en TypeScript? Bueno, aquí hay algunas situaciones comunes en las que los métodos estáticos son útiles:

- **Funciones de utilidad**: Métodos que realizan operaciones independientes de un objeto específico. Por ejemplo, una función de suma o una función de validación de correo electrónico, o una función que convierte una cadena en mayúsculas.
- **Métodos de fábrica**: Métodos que crean instancias de una clase con una configuración específica. Por ejemplo, un caso de la vida real seria: `User.createAdminUser()`.
- **Métodos de inicialización**: Métodos que inicializan una clase o realizan tareas de configuración. Por ejemplo, un método que establece la configuración de una aplicación o un método que carga datos iniciales. Un caso de la vida real seria: `App.initialize()`.
- **Métodos de validación**: Métodos que validan datos o realizan comprobaciones de seguridad. Por ejemplo, un método que verifica si una contraseña es segura o un método que valida un token de autenticación.

#### Propiedades de solo lectura:

Las propiedades de solo lectura son aquellas que solo pueden ser asignadas una vez y no pueden ser modificadas posteriormente. Esto es útil para definir propiedades que deben permanecer constantes durante la vida útil de un objeto.

```typescript
class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

let circle = new Circle(5);
console.log(circle.radius); // Output: 5
// circle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property.
```

En este ejemplo, la propiedad `radius` de la clase `Circle` es de solo lectura y solo puede ser asignada en el constructor. Una vez que se asigna un valor, no se puede modificar posteriormente. Esto garantiza que el radio de un círculo no cambie después de su creación.

Y en lo que respecta a, cuando debo usar propiedades de solo lectura en TypeScript? Bueno, aquí hay algunas situaciones comunes en las que las propiedades de solo lectura son útiles:

- **Constantes**: Propiedades que representan valores constantes que no deben cambiar. Por ejemplo, el valor de PI en una clase `Math`.
- **Configuración inicial**: Propiedades que se establecen en el constructor y no deben modificarse después de la inicialización. Por ejemplo, la configuración de un objeto de configuración.
- **Inmutabilidad**: Propiedades que deben permanecer constantes para garantizar la integridad de los datos. Por ejemplo, las propiedades de un objeto inmutable. Veamos un caso de la vida real: `User.id`, `User.createdAt`, `User.updatedAt`.
- **Seguridad**: Propiedades que deben protegerse contra modificaciones no autorizadas. Por ejemplo, las propiedades de un objeto de seguridad o autenticación. Un caso de la vida real seria: `User.role`, `User.permissions`.
- **Consistencia**: Propiedades que deben mantenerse constantes para garantizar la consistencia de los datos. Por ejemplo, las propiedades de un objeto de configuración o un objeto de estado. Un caso de la vida real seria: `App.config`, `App.state`.
- **Integridad**: Propiedades que deben permanecer constantes para garantizar la integridad de los datos. Por ejemplo, las propiedades de un objeto de datos inmutables. Un caso de la vida real seria: `User.id`, `User.createdAt`, `User.updatedAt`.

#### Decoradores:

Los decoradores son una característica experimental de TypeScript que permite añadir metadatos a clases, métodos, propiedades y parámetros. Los decoradores se utilizan para extender y modificar el comportamiento de las clases y sus miembros.

La sintaxys de un decorador es la siguiente:

```typescript
function addMetadata(target: any, key: string) {
  // Add metadata to the target or key
}
```

Y se aplica a una clase o miembro de la siguiente manera:

```typescript
function log(target: any, key: string) {
  console.log(`Property ${key} has been accessed.`);
}

class Person {
  @log
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let person = new Person("Alice");
console.log(person.name); // Output: Property name has been accessed.
```

En este ejemplo, el decorador `log` se aplica a la propiedad `name` de la clase `Person`. Cuando se accede a la propiedad `name`, se muestra un mensaje en la consola indicando que la propiedad ha sido accedida. Los decoradores son una característica avanzada de TypeScript que se utiliza para añadir funcionalidades adicionales a las clases y sus miembros.

Veamos un ejemplo de la vida real de cómo se pueden utilizar los decoradores en TypeScript. Pensemos en la siguiente historia de usuario sencilla:

## Historia de Usuario
Como desarrollador, quiero añadir un decorador `@Transactional` a un método de una clase para que se ejecute, lo que se espera es que si ocurre un error, se realice un rollback de la transacción. Este caso es especialmente útil en aplicaciones que manejan múltiples inserciones, actualizaciones y eliminaciones de varias tablas en una base de datos.

## Paso 1: Clase de Conexión de Base de Datos

Primero, definimos una clase de conexión de base de datos ficticia con métodos para manejar transacciones.

```typescript
class DatabaseConnection {
  beginTransaction(): void { // Inicia una transacción
    console.log("Transaction started");
  }

  commitTransaction(): void { // Confirma una transacción
    console.log("Transaction committed");
  }

  rollbackTransaction(): void { // Revierte una transacción
    console.log("Transaction rolled back");
  }
}
```

## Paso 2: Implementar el Decorador `@Transactional`

Luego, creamos el decorador `@Transactional`. Este decorador será una función que envuelve el método original y maneja las transacciones.

```typescript
function Transactional(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const originalMethod = descriptor.value!;
  
  descriptor.value = function (...args: any[]) {
    const dbConnection = new DatabaseConnection();
    
    dbConnection.beginTransaction();
    
    try {
      const result = originalMethod.apply(this, args);
      dbConnection.commitTransaction();
      return result;
    } catch (error) {
      dbConnection.rollbackTransaction();
      throw error;
    }
  };
  
  return descriptor;
}
```

## Paso 3: Aplicar el Decorador a un Método

Finalmente, aplicamos el decorador a un método en una clase que simula operaciones de base de datos.

```typescript
class UserService {
  @Transactional
  createUser(username: string, email: string): void {
    console.log(`Creating user ${username} with email ${email}`);
    // Simulamos una operación que podría fallar
    if (!email.includes('@')) {
      throw new Error("Invalid email");
    }
    console.log(`User ${username} created successfully`);
  }
}

// Probando la funcionalidad
const userService = new UserService();
try {
  userService.createUser("john_doe", "john.doe@example.com");
} catch (error) {
  console.error("Transaction failed:", error.message);
}

try {
  userService.createUser("jane_doe", "jane.doeexample.com");
} catch (error) {
  console.error("Transaction failed:", error.message);
}
```

## Explicación

1. **Clase de Conexión de Base de Datos**: La clase `DatabaseConnection` tiene métodos para manejar transacciones (`beginTransaction`, `commitTransaction`, `rollbackTransaction`).
2. **Decorador `@Transactional`**: El decorador `@Transactional` envuelve el método original. Antes de ejecutar el método, inicia una transacción. Si el método se ejecuta sin errores, confirma la transacción; si ocurre un error, revierte la transacción.
3. **Aplicación del Decorador**: El decorador se aplica al método `createUser` en la clase `UserService`. Este método intenta crear un usuario y puede lanzar una excepción si el correo electrónico no es válido.
