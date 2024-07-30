# Explicación de `tsconfig.json` en TypeScript

## Introducción

En este documento, se explica el archivo [tsconfig.json](tsconfig.json) en TypeScript. Se detallan las opciones de configuración más comunes y útiles, junto con ejemplos prácticos y casos de uso.

Este archivo `tsconfig.json` configura el compilador de TypeScript. A continuación se detalla cada opción configurada y algunas de las comentadas con su definición, uso práctico y casos de uso.

En este documento, destallaremos las opciones que vienen dentro de la llave `compilerOptions`. Sin embargo,

## `compilerOptions`

## Opciones no comentadas

### `target`

```json
"target": "es2016"
```

- **Definición**: Establece la versión de JavaScript para el código emitido.
- **Casos de uso**: Utiliza ES2016 (Ecmascript 2016) para características modernas pero compatibles con la mayoría de los entornos.
- **Ejemplo práctico**:

Sin `target`

```js
// Código TypeScript
const a = 1n; // Error: BigInt literals are not available when targeting lower than ES2020
```

Con `target`

```js
// Código TypeScript
const a = 1n; // Funciona correctamente
```

Settear target a `es2016` permite utilizar características modernas de JavaScript como `BigInt` y `async/await` sin preocuparse por la compatibilidad con navegadores o entornos antiguos.

### `module`

```json
"module": "commonjs"
```

- **Definición**: Especifica qué módulo de código se genera.
- **Casos de uso**: Utiliza CommonJS para compatibilidad con Node.js. Sin embargo, puedes usar `esnext` para módulos ES6. Esto significa que si quieres utilizar `import` y `export` en tu código, debes usar `esnext`, de lo contrario, si quieres utilizar `require` y `module.exports`, debes usar `commonjs`.

- **Ejemplo práctico**:

Sin `module`

```js
// Código TypeScript
import express from "express"; // Error: Cannot use import statement outside a module
```

Con `module`

```js
// Código TypeScript
import express from "express"; // Funciona correctamente
```

Al establecer `module` en `commonjs`, TypeScript compila el código a módulos CommonJS, lo que permite utilizar `require` y `module.exports` en lugar de `import` y `export`.

### `esModuleInterop`

```json
  "esModuleInterop": true
```

- **Definición**: Emite JavaScript adicional para facilitar la importación de módulos CommonJS.
- **Casos de uso**: Facilita la interoperabilidad entre módulos ES y CommonJS. Este caso de uso es útil cuando se trabaja con módulos de CommonJS en un proyecto ES. Recordemos que un proyecto ES es aquel que utiliza `import` y `export`.
- **Ejemplo práctico**:

Sin `esModuleInterop`

```js
// Módulo CommonJS
const express = require("express");
module.exports = express;

// Intentando importar en ES Module
import express from "express";
const app = express(); // Error: express is not a function
```

Con `esModuleInterop`

```js
// Módulo CommonJS
const express = require("express");
module.exports = express;

// Importando correctamente en ES Module
import express from "express";
const app = express(); // Funciona correctamente
```

Activar `esModuleInterop` añade compatibilidad adicional que permite escribir código ES Module más intuitivo y fácil de mantener al trabajar con bibliotecas CommonJS.

- **Contexto adicional**: En proyectos ES (ECMAScript) que utilizan `import` y `export`, `esModuleInterop` permite que las importaciones de módulos CommonJS (que usan `require` y `module.exports`) se comporten de manera más predecible y compatible con los módulos ES. Esto es especialmente útil en un entorno mixto donde se necesitan importar paquetes de Node.js o bibliotecas de terceros que aún utilizan el formato CommonJS.

### `forceConsistentCasingInFileNames`

```json
"forceConsistentCasingInFileNames": true
```

- **Definición**: Asegura que la capitalización sea correcta en las importaciones.
- **Casos de uso**: Evita errores en sistemas de archivos que distinguen entre mayúsculas y minúsculas.
- **Ejemplo práctico**:

Sin `forceConsistentCasingInFileNames`

```js
// Archivo: MyModule.ts
export const myModule = "Hello, world!";
```

```js
// Archivo: app.ts
import { myModule } from "./mymodule"; // Error: File './mymodule' is not found
```

Con `forceConsistentCasingInFileNames`

```js
// Archivo: MyModule.ts
export const myModule = "Hello, world!";
```

```js
// Archivo: app.ts
import { myModule } from "./MyModule"; // Funciona correctamente
```

Activar `forceConsistentCasingInFileNames` garantiza que las importaciones coincidan con la capitalización correcta de los nombres de archivo, evitando errores de importación en sistemas de archivos que distinguen entre mayúsculas y minúsculas.

### `strict`

```json
"strict": true
```

- **Definición**: Habilita todas las opciones de verificación de tipos estrictos.
- **Casos de uso**: Mejora la seguridad del tipo en todo el proyecto.
- **Ejemplo práctico**:

Sin `strict`

```js
// Código TypeScript
let a: number = "Hello, world!"; // No hay error
```

Con `strict`

```js
// Código TypeScript
let a: number = "Hello, world!"; // Error: Type '"Hello, world!"' is not assignable to type 'number'
```

Activar `strict` habilita todas las opciones de verificación de tipos estrictos, lo que mejora la seguridad del tipo en todo el proyecto y ayuda a detectar errores de tipo comunes. Recordemos que la verificación de tipos es una de las características más importantes de TypeScript, puesto que nos permite detectar errores en tiempo de compilación.

### `skipLibCheck`

```json
"skipLibCheck": true
```

- **Definición**: Omite la verificación de tipo en todos los archivos `.d.ts`.
- **Casos de uso**: Acelera el tiempo de compilación omitiendo la verificación de tipo en archivos de declaración.
- **Ejemplo práctico**:

Sin `skipLibCheck`

```js
// Código TypeScript
import express from "express";
const app = express();

// Archivo de declaración de express.d.ts
declare module "express" {
  export function express(): void;
}
```

Con `skipLibCheck`

```js
// Código TypeScript
import express from "express";
const app = express();
```

En este ejemplo, al habilitar skipLibCheck, se omite la verificación de tipos en los archivos de declaración (.d.ts), lo que puede resultar en una compilación más rápida, especialmente en proyectos grandes o cuando se utilizan muchas bibliotecas externas.

## Opciones comentadas

### `incremental`

```json
// "incremental": true
```

- **Definición**: Guarda archivos `.tsbuildinfo` para permitir la compilación incremental de proyectos.
- **Casos de uso**: Mejora los tiempos de compilación en proyectos grandes.
- **Ejemplo práctico**:

Sin `incremental`

Primera compilación:

```TypeScript
const a = 1 + 1;
//Tiempo de compilación: 10 segundos.
```

Segunda compilación (después de realizar cambios en un archivo):

```TypeScript
// Código TypeScript
const b = 2 + 2;
// Tiempo de compilación: 10 segundos.
```

Con `incremental`

Primera compilación:

```TypeScript
const a = 1 + 1;
Tiempo de compilación: 10 segundos.
//Se guarda un archivo .tsbuildinfo.
```

Segunda compilación (después de realizar cambios en un archivo):

```Typescript
const b = 2 + 2;
// Tiempo de compilación: 2 segundos (gracias a la información guardada en el archivo .tsbuildinfo).
```

Y ¿Qué es la compilación incremental? Podemos decir que es una técnica que permite recompilar solo los archivos que han cambiado desde la última compilación, lo que reduce significativamente los tiempos de compilación en proyectos grandes.

Y ¿Qué es un archivo `.tsbuildinfo`? Es un archivo que contiene información sobre la compilación anterior, lo que permite una recompilación más rápida cuando se realizan cambios en el código.

Activar incremental permite la compilación incremental de proyectos, lo que mejora los tiempos de compilación al guardar archivos .tsbuildinfo que contienen información sobre la compilación anterior. Esto resulta en una recompilación más rápida cuando se realizan cambios en el código.

### `composite`

```json
"composite": true
```

- **Definición**: Habilita restricciones que permiten que un proyecto TypeScript se use con referencias de proyectos.
- **Casos de uso**: Útil en repositorios monolíticos con múltiples proyectos TypeScript interdependientes.
- **Dependencias circulares**: Son dependencias entre dos o más proyectos que se referencian mutuamente. Por ejemplo, digamos que tienes dos proyectos A y B, donde A depende de B y B depende de A. Sin `composite`, no se pueden compilar estos proyectos con dependencias circulares directamente. Sin embargo, con `composite`, puedes definir referencias entre proyectos y gestionar dependencias circulares de manera efectiva.
- **Ejemplo práctico**:

Sin `composite`

1. **Proyecto A (tsconfig.json)**:

   ```json
   {
     "compilerOptions": {
       "outDir": "./dist"
     }
   }
   ```

2. **Proyecto B (tsconfig.json)**:

   ```json
   {
     "compilerOptions": {
       "outDir": "./dist"
     }
   }
   ```

3. **Dependencia circular**:

   ```typescript
   // Proyecto A
   // Archivo: A.ts
   import { b } from "../projectB/B";

   export const a = 1;

   // Proyecto B
   // Archivo: B.ts
   import { a } from "../projectA/A";

   export const b = 2;
   ```

Sin `composite`, no se pueden compilar estos proyectos con dependencias circulares directamente.

Con `composite`

1. **Proyecto A (tsconfig.json)**:

   ```json
   {
     "compilerOptions": {
       "composite": true,
       "outDir": "./dist"
     },
     "references": [{ "path": "../projectB" }]
   }
   ```

2. **Proyecto B (tsconfig.json)**:

   ```json
   {
     "compilerOptions": {
       "composite": true,
       "outDir": "./dist"
     },
     "references": [{ "path": "../projectA" }]
   }
   ```

3. **Dependencia circular**:

   ```typescript
   // Proyecto A
   // Archivo: A.ts
   import { b } from "../projectB/B";

   export const a = 1;

   // Proyecto B
   // Archivo: B.ts
   import { a } from "../projectA/A";

   export const b = 2;
   ```

Activar `composite` habilita restricciones y capacidades que permiten la gestión de proyectos interdependientes en TypeScript, facilitando la compilación incremental y la referencia de proyectos, lo que es especialmente útil en grandes repositorios monolíticos.

### `sourceMap`

```json
"sourceMap": true
```

- **Definición**: Crea archivos de mapa de origen para archivos JavaScript emitidos.
- **Casos de uso**: Facilita la depuración al mapear el código JavaScript emitido de vuelta al TypeScript original.
- **Ejemplo práctico**:

Sin `sourceMap`

1. **Código TypeScript (example.ts)**:

   ```typescript
   const greeting: string = "Hello, World!";
   console.log(greeting);
   ```

2. **Código JavaScript emitido (example.js)**:

   ```javascript
   var greeting = "Hello, World!";
   console.log(greeting);
   ```

   Al depurar en el navegador, sólo se verá el archivo `example.js`.

Con `sourceMap`

1. **Código TypeScript (example.ts)**:

   ```typescript
   const greeting: string = "Hello, World!";
   console.log(greeting);
   ```

2. **Código JavaScript emitido (example.js)**:

   ```javascript
   var greeting = "Hello, World!";
   console.log(greeting);
   //# sourceMappingURL=example.js.map
   ```

3. **Archivo de mapa de origen (example.js.map)**:

   ```json
   {
     "version": 3,
     "file": "example.js",
     "sourceRoot": "",
     "sources": ["example.ts"],
     "names": [],
     "mappings": "AAAA,IAAM,QAAQ,GAAG,aAAa,CAAC;AACjC,OAAO,CAAC,GAAG,CAAC,QAAQ,CAAC,CAAC"
   }
   ```

   Al depurar en el navegador, se verá el archivo `example.ts` original, facilitando la depuración.

Activar `sourceMap` permite la creación de archivos de mapa de origen que ayudan a los desarrolladores a depurar el código JavaScript emitido refiriéndose al código TypeScript original.

### `declaration`

```json
"declaration": true
```

- **Definición**: Genera archivos `.d.ts` a partir de archivos TypeScript y JavaScript en tu proyecto.
- **Casos de uso**: Útil para bibliotecas que desean proporcionar definiciones de tipo para su código.
- **Ejemplo práctico**:

Sin `declaration`

1. **Código TypeScript (example.ts)**:

   ```typescript
   export const greeting: string = "Hello, World!";
   ```

2. **Código JavaScript emitido (example.js)**:
   ```javascript
   export var greeting = "Hello, World!";
   ```

Con `declaration`

1. **Código TypeScript (example.ts)**:

   ```typescript
   export const greeting: string = "Hello, World!";
   ```

2. **Código JavaScript emitido (example.js)**:

   ```javascript
   export var greeting = "Hello, World!";
   ```

3. **Archivo de declaración emitido (example.d.ts)**:
   ```typescript
   export declare const greeting: string;
   ```

Activar `declaration` permite generar archivos de declaración `.d.ts`, que son útiles para proporcionar definiciones de tipo para bibliotecas.

### `emitDecoratorMetadata`

```json
"emitDecoratorMetadata": true
```

- **Definición**: Emite metadatos de tipo de diseño para declaraciones decoradas en archivos fuente.
- **Casos de uso**: Necesario para el uso de decoradores en frameworks como Angular.
- **Ejemplo práctico**:

Sin `emitDecoratorMetadata`

1. **Código TypeScript (example.ts)**:

   ```typescript
   import "reflect-metadata";

   @Reflect.metadata("design:type", Object)
   class Example {
     constructor(public name: string) {}
   }
   ```

Con `emitDecoratorMetadata`

1. **Código TypeScript (example.ts)**:

   ```typescript
   import "reflect-metadata";

   @Reflect.metadata("design:type", Object)
   class Example {
     constructor(public name: string) {}
   }
   ```

2. **Código JavaScript emitido (example.js)**:
   ```javascript
   require("reflect-metadata");
   var __decorate =
     (this && this.__decorate) ||
     function (decorators, target, key, desc) {
       /*...*/
     };
   var Example = /** @class */ (function () {
     function Example(name) {
       this.name = name;
     }
     Example = __decorate([Reflect.metadata("design:type", Object)], Example);
     return Example;
   })();
   ```

Activar `emitDecoratorMetadata` permite la emisión de metadatos de tipo de diseño, necesarios para el uso de decoradores en frameworks como Angular.

### `jsx`

```json
"jsx": "react"
```

- **Definición**: Especifica qué código JSX se genera.
- **Casos de uso**: Utilizado en proyectos que usan React para definir cómo se deben compilar los archivos `.tsx`.
- **Ejemplo práctico**:

Sin `jsx`

1. **Código TypeScript (example.tsx)**:

   ```tsx
   const element = <div>Hello, World!</div>;
   ```

2. **Código JavaScript emitido (example.js)**:
   ```javascript
   var element = React.createElement("div", null, "Hello, World!");
   ```

Con `jsx`

1. **Código TypeScript (example.tsx)**:

   ```tsx
   const element = <div>Hello, World!</div>;
   ```

2. **Código JavaScript emitido (example.js)**:
   ```javascript
   var element = React.createElement("div", null, "Hello, World!");
   ```

Activar `jsx` permite la compilación de archivos `.tsx` en código JavaScript compatible con React.

### `strictNullChecks`

```json
"strictNullChecks": true
```

- **Definición**: Cuando se verifica el tipo, toma en cuenta `null` y `undefined`.
- **Casos de uso**: Previene errores comunes relacionados con valores `null` o `undefined`.
- **Ejemplo práctico**:

Sin `strictNullChecks`

1. **Código TypeScript (example.ts)**:
   ```typescript
   let value: string = null;
   console.log(value.length);
   ```

Con `strictNullChecks`

1. **Código TypeScript (example.ts)**:
   ```typescript
   let value: string | null = null;
   if (value !== null) {
     console.log(value.length);
   }
   ```

Activar `strictNullChecks` previene errores comunes al considerar `null` y `undefined` en las verificaciones de tipo.

### `noImplicitAny`

```json
"noImplicitAny": true
```

- **Definición**: Habilita la generación de errores para expresiones y declaraciones con un tipo implícito `any`.
- **Casos de uso**: Fuerza a declarar explícitamente los tipos, mejorando la claridad del código.
- **Ejemplo práctico**:

Sin `noImplicitAny`

1. **Código TypeScript (example.ts)**:
   ```typescript
   function greet(name) {
     return "Hello, " + name;
   }
   ```

Con `noImplicitAny`

1. **Código TypeScript (example.ts)**:
   ```typescript
   function greet(name: string) {
     return "Hello, " + name;
   }
   ```

Activar `noImplicitAny` mejora la claridad del código al forzar la declaración explícita de los tipos.

### `outDir`

```json
"outDir": "./dist"
```

- **Definición**: Especifica una carpeta de salida para todos los archivos emitidos.
- **Casos de uso**: Organiza los archivos emitidos en un solo directorio, útil para separar el código fuente del código compilado.
- **Ejemplo práctico**:

Sin `outDir`

1. **Código TypeScript (estructura del proyecto)**:

   ```
   /project
       /src
           example.ts
   ```

2. **Archivos emitidos**:
   ```
   /project
       /src
           example.js
   ```

Con `outDir`

1. **Código TypeScript (estructura del proyecto)**:

   ```
   /project
       /src
           example.ts
   ```

2. **Archivos emitidos**:
   ```
   /project
       /dist
           example.js
   ```

Activar `outDir` permite organizar los archivos emitidos en un solo directorio.

### `rootDir`

```json
"rootDir": "./src"
```

- **Definición**: Especifica la carpeta raíz dentro de tus archivos fuente.
- **Casos de uso**: Ayuda a mantener una estructura de proyecto clara y consistente.
- **Ejemplo práctico**:

Sin `rootDir`

1. **Código TypeScript (estructura del proyecto)**:

   ```
   /project
       example.ts
       /nested
           nestedExample.ts
   ```

2. **Archivos emitidos**:
   ```
   /project
       example.js
       /nested
           nestedExample.js
   ```

Con `rootDir`

1. **Código TypeScript (estructura del proyecto)**:

   ```
   /project
       /src
           example.ts
           /nested
               nestedExample.ts
   ```

2. **Archivos emitidos**:
   ```
   /project
       /dist
           example.js
           /nested
               nestedExample.js
   ```

Activar `rootDir` ayuda a mantener una estructura de proyecto clara y consistente al especificar la carpeta raíz de los archivos fuente.
