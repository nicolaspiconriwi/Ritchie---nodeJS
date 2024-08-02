# Inyección de dependencias en TypeScript y Node.js

La inyección de dependencias es un patrón de diseño que se utiliza para mejorar la modularidad y la reutilización de código en aplicaciones de Node.js. En este artículo, aprenderás cómo implementar la inyección de dependencias en TypeScript y Node.js, y cómo puede ayudarte a escribir código más limpio y mantenible.

## ¿Qué es la inyección de dependencias?

Me gusta explicar este concepto desde lo que NO se debe hacer. Imagina que tienes una clase `UserService` que necesita una instancia de otra clase `DatabaseService` en cada uno de sus metodos para funcionar correctamente. Veamos el siguiente ejemplo de como NO se debe hacer:


```typescript
class DatabaseService {
  connect() {
    // Lógica para conectar a la base de datos
  }
}

class UserService {

  createUser(name: string, email: string): void {
    const databaseService = new DatabaseService();
    databaseService.connect();
    // Lógica para crear un usuario en la base de datos
  }

  getUser(id: number): void {
    const databaseService = new DatabaseService();
    databaseService.connect();
    // Lógica para obtener un usuario de la base de datos
  }
}
```

Veamos por qué este enfoque no es ideal:

- La clase `UserService` está acoplada a la clase `DatabaseService`, lo que significa que no se puede reutilizar la clase `UserService` con otra implementación de la clase `DatabaseService`.
- La clase `UserService` es responsable de crear instancias de la clase `DatabaseService`, lo que viola el principio de responsabilidad única.
- La clase `UserService` no es fácil de probar, ya que no se pueden inyectar dependencias falsas o simuladas para las pruebas unitarias.

Ahora, veamos cómo se puede mejorar este código utilizando la inyección de dependencias.


```typescript
class DatabaseService {
  connect() {
    // Lógica para conectar a la base de datos
  }
}

class UserService {

  constructor(private databaseService: DatabaseService) {}

  createUser(name: string, email: string): void {
    this.databaseService.connect();
    // Lógica para crear un usuario en la base de datos
  }

  getUser(id: number): void {
    this.databaseService.connect();
    // Lógica para obtener un usuario de la base de datos
  }
}
```