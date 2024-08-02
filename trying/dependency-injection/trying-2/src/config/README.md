# ¿Por qué nos creamos un container.ts?

La libreria `tsyringe` nos permite crear un container de inyección de dependencias, que nos permitirá registrar nuestras dependencias y resolverlas en cualquier parte de nuestra aplicación.

Recordemos que la inyección de dependencias es una técnica que nos permite desacoplar nuestras clases y funciones, permitiéndonos reutilizarlas en cualquier parte de nuestra aplicación y evitando que nuestras clases tengan que instanciar sus dependencias.

Funciona bastante bien con TypeScript, ya que nos permite definir interfaces y tipos para nuestras dependencias, y nos ayuda a mantener un código más limpio y mantenible.

## Paso a paso

1. Instalamos la librería `tsyringe`:

```bash
npm install tsyringe
```

2. Creamos un archivo `container.ts` dentro de la carpeta `src/config`:

```typescript
import { container } from 'tsyringe';

container.register('ExampleService', {
  useClass: ExampleService,
});
```
