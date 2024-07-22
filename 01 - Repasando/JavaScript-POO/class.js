//Ahora utilicemos la sintaxis moderna

/*
Vamos a recrear el mismo ejemplo de personajes de videojuego utilizando la sintaxis moderna de clases en JavaScript. Usaremos clases para definir los personajes, guerreros y magos, y aprovecharemos la herencia de clases para sobrescribir el método accionEspecial.


Paso 1: Definir la Clase Base Personaje
Comenzamos definiendo la clase base Personaje, que tendrá las propiedades comunes nombre y salud, así como métodos comunes como presentarse, recibirDaño y accionEspecial.
*/

class Personaje {
    constructor(nombre, salud) {
      this.nombre = nombre;
      this.salud = salud;
    }
  
    presentarse() {
      console.log(`Soy ${this.nombre}, con ${this.salud} puntos de salud.`);
    }
  
    recibirDaño(cantidad) {
      this.salud -= cantidad;
      if (this.salud <= 0) {
        console.log(`${this.nombre} ha sido derrotado.`);
      } else {
        console.log(`${this.nombre} ahora tiene ${this.salud} puntos de salud.`);
      }
    }
  
    accionEspecial(objetivo) {
      console.log(`${this.nombre} realiza una acción especial contra ${objetivo.nombre}!`);
    }

    static sumar(a,b){
      return a + b
    }
}

/*

Paso 2: Definir la Clase Guerrero que Hereda de Personaje
    Creamos la clase Guerrero que extiende Personaje. Añadimos una propiedad adicional fuerza y sobrescribimos el método accionEspecial.
*/

class Guerrero extends Personaje {
    constructor(nombre, salud, fuerza) {
    super(nombre, salud); // Llamada al constructor de la clase padre
    this.fuerza = fuerza;
    }

    accionEspecial(objetivo) {
    // super.accionEspecial(objetivo);
    console.log(`${this.nombre} realiza un ataque especial contra ${objetivo.nombre}!`);
    objetivo.recibirDaño(this.fuerza * 2);
    }
}
    
/*
Paso 3: Definir la Clase Mago que Hereda de Personaje
Creamos la clase Mago que extiende Personaje. Añadimos una propiedad adicional mana y sobrescribimos el método accionEspecial.
*/

class Mago extends Personaje {
    constructor(nombre, salud, mana) {
        super(nombre, salud); // Llamada al constructor de la clase padre
        this.mana = mana;
    }
    
    accionEspecial(objetivo) {
        if (this.mana >= 20) {
        console.log(`${this.nombre} lanza un hechizo poderoso contra ${objetivo.nombre}!`);
        objetivo.recibirDaño(25);
        this.mana -= 20;
        } else {
        console.log(`${this.nombre} no tiene suficiente mana para un hechizo poderoso.`);
        }
    }
}
/*
Paso 4: Crear Instancias y Utilizar el Polimorfismo
Ahora, creamos instancias de Guerrero y Mago, y llamamos al método accionEspecial para ver cómo se comporta de manera diferente según el tipo de personaje.
*/

// Creando instancias de Guerrero y Mago
const guerrero = new Guerrero('Arthas', 100, 15);
const mago = new Mago('Gandalf', 80, 50);

// Presentarse
guerrero.presentarse(); // "Soy Arthas, con 100 puntos de salud."
mago.presentarse(); // "Soy Gandalf, con 80 puntos de salud."

// Simular una batalla con acción especial
guerrero.accionEspecial(mago); // "Arthas realiza un ataque especial contra Gandalf!"
                               // "Gandalf ahora tiene 50 puntos de salud."
mago.accionEspecial(guerrero); // "Gandalf lanza un hechizo poderoso contra Arthas!"
                               // "Arthas ahora tiene 75 puntos de salud."

