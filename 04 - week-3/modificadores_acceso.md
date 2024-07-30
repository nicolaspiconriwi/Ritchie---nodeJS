# Modificadores de acceso en TypeScript

Primero que todo, recordemos que son los miembros de una clase en TypeScript:

- **Propiedades**: Son variables que se declaran dentro de una clase.
- **Métodos**: Son funciones que se declaran dentro de una clase.

Los modificadores de acceso en TypeScript son una característica que nos permite controlar la visibilidad de los miembros de una clase. Los modificadores de acceso son palabras clave que se utilizan para establecer la accesibilidad de los miembros de una clase. TypeScript admite los siguientes modificadores de acceso:

- **public**: Los miembros de una clase con el modificador de acceso `public` se pueden acceder desde cualquier lugar.
- **private**: Los miembros de una clase con el modificador de acceso `private` solo se pueden acceder desde dentro de la misma clase.
- **protected**: Los miembros de una clase con el modificador de acceso `protected` solo se pueden acceder desde dentro de la misma clase y de las clases derivadas.

Veamos un ejemplo de cómo se utilizan los modificadores de acceso en TypeScript:

```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let animal = new Animal("Lion");
console.log(animal.getName()); // Output: Lion
console.log(animal.name); // Error: Property 'name' is private and only accessible within class 'Animal'.
```

En este ejemplo, la propiedad `name` de la clase `Animal` tiene el modificador de acceso `private`, lo que significa que solo se puede acceder a ella desde dentro de la misma clase. Por lo tanto, si intentamos acceder a la propiedad `name` desde fuera de la clase, obtendremos un error.

Es importante tener en cuenta que los modificadores de acceso en TypeScript son una característica de tiempo de compilación y no afectan el código JavaScript generado. Por lo tanto, es importante tener en cuenta que los modificadores de acceso solo se aplican durante el desarrollo y no tienen ningún efecto en tiempo de ejecución.

```typescript
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Lion extends Animal {
    constructor(name: string) {
        super(name);
    }

    public getName(): string {
        return this.name;
    }
}

let lion = new Lion("Simba");
console.log(lion.getName()); // Output: Simba
console.log(lion.name); // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
```

En este ejemplo, la propiedad `name` de la clase `Animal` tiene el modificador de acceso `protected`, lo que significa que solo se puede acceder a ella desde dentro de la misma clase y de las clases derivadas. Por lo tanto, si intentamos acceder a la propiedad `name` desde fuera de la clase o de una clase derivada, obtendremos un error.