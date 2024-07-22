// Campos Públicos y Privados
/*
En JavaScript, puedes definir campos públicos y privados en las clases. Los campos públicos son accesibles desde cualquier lugar, mientras que los campos privados solo son accesibles desde dentro de la clase. Los campos privados se definen utilizando un # antes del nombre del campo.

Campos Públicos
Por defecto, todos los campos y métodos de una clase en JavaScript son públicos.

*/

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre; // Campo público
      this.edad = edad; // Campo público
    }
  
    presentarse() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
  
const persona = new Persona('Juan', 30);
console.log(persona.nombre); // "Juan"
console.log(persona.edad); // 30
persona.presentarse(); // "Hola, soy Juan y tengo 30 años."

/*
Campos Privados
Para definir campos privados, usamos el prefijo #. Los campos privados no pueden ser accedidos ni modificados directamente desde fuera de la clase.
*/

class Persona1 {
    #nombre; // Campo privado
    #edad; // Campo privado
  
    constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
    }
  
    presentarse() {
      console.log(`Hola, soy ${this.#nombre} y tengo ${this.#edad} años.`);
    }
  
    // Método para acceder a un campo privado
    getNombre() {
      return this.#nombre;
    }
  
    // Método para modificar un campo privado
    setNombre(nombre) {
      this.#nombre = nombre;
    }
}
  
  const persona1 = new Persona1('Juan', 30);
  console.log(persona1.getNombre()); // "Juan"
  persona1.setNombre('Pedro');
  console.log(persona1.getNombre()); // "Pedro"
  persona1.presentarse(); // "Hola, soy Pedro y tengo 30 años."
  
  // Esto causará un error porque los campos son privados
  //console.log(persona1.#nombre); // SyntaxError
 // console.log(persona1.#edad); // SyntaxError
  
/*
Métodos Privados
También puedes definir métodos privados usando el prefijo #.
*/

class Persona2 {
    #nombre; // Campo privado
    #edad; // Campo privado
  
    constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
    }
  
    // Método privado
    #saludoPrivado() {
      console.log(`Esto es un saludo privado de ${this.#nombre}`);
    }
  
    // Método público que llama al método privado
    presentarse() {
      console.log(`Hola, soy ${this.#nombre} y tengo ${this.#edad} años.`);
      this.#saludoPrivado();
    }
  }
  
  const persona2 = new Persona2('Juan', 30);
  persona2.presentarse(); // "Hola, soy Juan y tengo 30 años." y "Esto es un saludo privado de Juan"
  
    // Esto causará un error porque el método es privado
    // persona2.#saludoPrivado(); // SyntaxError
  
/*
static Métodos y Propiedades
Los métodos y propiedades estáticos pertenecen a la clase en sí, no a las instancias de la clase.
*/

class Matematica {
    static sumar(a, b) {
      return a + b;
    }
  }
  
  console.log(Matematica.sumar(2, 3)); // 5
  
  // Esto causará un error porque sumar es un método estático
  const math = new Matematica();
  console.log(math.sumar(2, 3)); // TypeError
  
/*
get y set
Los métodos get y set se usan para definir propiedades que se pueden obtener y establecer como si fueran campos públicos, pero que en realidad ejecutan lógica adicional.  
*/

class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    get area() {
      return this.ancho * this.alto;
    }
  
    set area(value) {
      throw new Error('No se puede establecer el área directamente.');
    }
  }
  
  const rectangulo = new Rectangulo(5, 10);
  console.log(rectangulo.area); // 50
  rectangulo.area = 100; // Error: No se puede establecer el área directamente.

/*
Resumen
Campos Públicos y Privados: Campos públicos son accesibles desde cualquier lugar, campos privados (prefijados con #) solo desde dentro de la clase.
Métodos Privados: Se definen con el prefijo # y solo pueden ser llamados desde dentro de la clase.
Herencia: Las clases pueden extender otras clases y sobrescribir métodos.
static Métodos y Propiedades: Pertenece a la clase, no a las instancias.
get y set: Permite definir propiedades con lógica adicional para obtener y establecer valores.
*/