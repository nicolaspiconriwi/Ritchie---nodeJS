//Que son los prototipos
/*
1. Prototipos de Objetos
Cada objeto en JavaScript tiene una propiedad interna oculta llamada [[Prototype]]. Esta propiedad puede ser otro objeto o null.
*/

/*
2. Prototype Property
Las funciones en JavaScript (que también son objetos) tienen una propiedad llamada prototype. Este es un objeto que se utiliza para construir nuevas instancias con la palabra clave new.
*/
//Ejemplo
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;

  }
  
  Producto.prototype.calcularInventario = function() {
    const totalInventario = this.precio * this.cantidad
    console.log(`El total del inventario es ${totalInventario}`);
  };
  
  const shampoo = new Producto('Shampoo', 10, 100);
  Producto.calcularInventario(); // "El total del inventario es 1000"
  

/*
3. Cadena de Prototipos (Prototype Chain)
Cuando intentas acceder a una propiedad o método en un objeto, JavaScript primero busca esa propiedad o método en el objeto mismo. Si no lo encuentra, busca en el prototipo del objeto, y así sucesivamente hasta que encuentre la propiedad o hasta que llegue al final de la cadena de prototipos (donde el prototipo es null).
*/

/*
4. Herencia Prototípica
JavaScript permite la herencia entre objetos a través de los prototipos. Puedes establecer el prototipo de un objeto a otro objeto para crear una relación de herencia. Esto se puede hacer usando Object.create() o manipulando la propiedad __proto__.

*/
/*
Ejemplo: Personajes de Videojuego
Imagina que estamos creando un juego donde tenemos diferentes tipos de personajes: Personaje, Guerrero y Mago. Usaremos prototipos para definir las habilidades y atributos de cada tipo de personaje.

1. Definimos el prototipo base Personaje:
Este prototipo contendrá propiedades y métodos comunes a todos los personajes.
 */

function Personaje(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
  }
  
  Personaje.prototype.presentarse = function() {
    console.log(`Soy ${this.nombre}, con ${this.salud} puntos de salud.`);
  };
  
  Personaje.prototype.recibirDaño = function(cantidad) {
    this.salud -= cantidad;
    if (this.salud <= 0) {
      console.log(`${this.nombre} ha sido derrotado.`);
    } else {
      console.log(`${this.nombre} ahora tiene ${this.salud} puntos de salud.`);
    }
  };


/*
  2. Creamos un prototipo Guerrero que hereda de Personaje:
    Añadimos propiedades y métodos específicos para los guerreros.
 */
  function Guerrero(nombre, salud, fuerza) {
    Personaje.call(this, nombre, salud);
    this.fuerza = fuerza;
  }
  
  // Herencia del prototipo Personaje
  Guerrero.prototype = Object.create(Personaje.prototype);
  Guerrero.prototype.constructor = Guerrero;
  
  Guerrero.prototype.atacar = function(objetivo) {
    console.log(`${this.nombre} ataca a ${objetivo.nombre} con una fuerza de ${this.fuerza}.`);
    objetivo.recibirDaño(this.fuerza);
  };
  
  /*
  3. Creamos un prototipo Mago que hereda de Personaje:
    Añadimos propiedades y métodos específicos para los magos.
  */
    function Mago(nombre, salud, mana) {
        Personaje.call(this, nombre, salud);
        this.mana = mana;
      }
      
      // Herencia del prototipo Personaje
      Mago.prototype = Object.create(Personaje.prototype);
      Mago.prototype.constructor = Mago;
      
      Mago.prototype.lanzarHechizo = function(objetivo) {
        if (this.mana > 0) {
          console.log(`${this.nombre} lanza un hechizo a ${objetivo.nombre}.`);
          objetivo.recibirDaño(10);
          this.mana -= 10;
        } else {
          console.log(`${this.nombre} no tiene suficiente mana para lanzar un hechizo.`);
        }
      };

      /*
      4. Usamos los prototipos para crear instancias y simular una batalla:
      */

      // Creando instancias de Guerrero y Mago
        const guerrero = new Guerrero('Arthas', 100, 15);
        const mago = new Mago('Gandalf', 80, 50);

        // Presentarse
        guerrero.presentarse(); // "Soy Arthas, con 100 puntos de salud."
        mago.presentarse(); // "Soy Gandalf, con 80 puntos de salud."

        // Simular una batalla
        guerrero.atacar(mago); // "Arthas ataca a Gandalf con una fuerza de 15."
                            // "Gandalf ahora tiene 65 puntos de salud."
        mago.lanzarHechizo(guerrero); // "Gandalf lanza un hechizo a Arthas."
                                    // "Arthas ahora tiene 90 puntos de salud."


    //Ahora hablemos sobre polimorfismo
    /*
    El polimorfismo es un concepto que permite que diferentes objetos respondan a la misma interfaz (es decir, métodos con el mismo nombre) de diferentes maneras.
     
    Es posible definir el método accionEspecial en el prototipo Personaje y luego sobrescribirlo en los prototipos Guerrero y Mago para que se comporte de manera diferente en cada uno. Esto muestra cómo los métodos heredados pueden ser personalizados para diferentes tipos de objetos, una característica clave del polimorfismo.

    Definiendo el Método accionEspecial en Personaje
    Primero, definimos el método accionEspecial en el prototipo Personaje:
     */

    Personaje.prototype.accionEspecial = function(objetivo) {
        console.log(`${this.nombre} realiza una acción especial contra ${objetivo.nombre}!`);
      };
    
      /*   
      Sobrescribiendo accionEspecial en Guerrero y Mago
      Luego, sobrescribimos el método accionEspecial en los prototipos Guerrero y Mago:    
      */

      // Sobrescribiendo el método accionEspecial en Guerrero
        Guerrero.prototype.accionEspecial = function(objetivo) {
            console.log(`${this.nombre} realiza un ataque especial contra ${objetivo.nombre}!`);
            objetivo.recibirDaño(this.fuerza * 2);
        };
        
        // Sobrescribiendo el método accionEspecial en Mago
        Mago.prototype.accionEspecial = function(objetivo) {
            if (this.mana >= 20) {
            console.log(`${this.nombre} lanza un hechizo poderoso contra ${objetivo.nombre}!`);
            objetivo.recibirDaño(25);
            this.mana -= 20;
            } else {
            console.log(`${this.nombre} no tiene suficiente mana para un hechizo poderoso.`);
            }
        };
        

        /*
        Uso del Polimorfismo con accionEspecial
        Ahora, podemos crear instancias de Guerrero y Mago, y llamar al método accionEspecial en cada uno para ver cómo se comportan de manera diferente:
        */

        // Creando instancias de Guerrero y Mago
        const guerrero1 = new Guerrero('Archie', 500, 50);
        const mago1 = new Mago('Diallo', 300, 80);
        mago1.atacar()

        // Presentarse
        guerrero1.presentarse(); // "Soy Archie, con 500 puntos de salud."
        mago1.presentarse(); // "Soy Diallo, con 300 puntos de salud."

        // Simular una batalla con acción especial
        guerrero.accionEspecial(mago1); // "Archie realiza un ataque especial contra Diallo!"
                                    // "Diallo ahora tiene 270 puntos de salud."
        mago.accionEspecial(guerrero1); // "Diallo lanza un hechizo poderoso contra Archie!"
                                    // "Archie ahora tiene 475 puntos de salud."
