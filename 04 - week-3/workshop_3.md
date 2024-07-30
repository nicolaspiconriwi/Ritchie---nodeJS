
# Taller de TypeScript en la Industria Farmacéutica

## Título:
**Implementación de Buenas Prácticas de TypeScript en la Industria Farmacéutica**

## Introducción:
Este taller está diseñado en el ambiente de la industria farmacéutica para mejorar tus habilidades en JavaScript mediante el uso de TypeScript. Exploraremos los conceptos fundamentales de TypeScript, un superset de JavaScript que añade tipado estático y otras características avanzadas. Este taller optimizará sus proyectos con buenas prácticas y herramientas modernas, mejorando la calidad y mantenibilidad del código en sus aplicaciones farmacéuticas.

## Objetivos:
1. Comprender los fundamentos de TypeScript y su sintaxis básica.
2. Aprender a configurar un proyecto de TypeScript.
3. Aplicar buenas prácticas en la gestión de dependencias y configuración de herramientas.
4. Implementar conceptos avanzados como clases, interfaces, y asincronía en TypeScript.
5. Reflexionar sobre las diferencias y ventajas de usar TypeScript en proyectos de JavaScript.

## Instrucciones de entrega:
1. Completa los ejercicios y casos de uso presentados en cada sección.
2. Sube tu proyecto final a un repositorio de GitHub.
3. Comparte el enlace del repositorio en Moodle en la sección habilitada para las entregas.
4. Puedes usar consola, html y css para completar los ejercicios. Cualquier duda o pregunta, no dudes en contactarme.

## Criterios globales tecnicos de aceptación:

1. El proyecto debe estar en un repositorio de GitHub.
2. El proyecto debe contener un archivo `README.md` con una descripción del proyecto y las instrucciones necesarias para ejecutarlo.
3. El código debe seguir las buenas prácticas de nombrado de variables, funciones y clases.
4. El código debe estar correctamente indentado y estructurado.
5. El código debe ser claro y fácil de leer.
6. El código debe estar escrito en inglés.
7. El uso de cualquier libreria debe ser justificado en el README.md
8. El proyecto debe ser entregado antes del proximo 30 de Julio a las 23:59.


## Historias de Usuario con Criterios de Aceptación

### Historia de Usuario 1: Gestión de Inventario de Medicamentos

#### Descripción:
Como gerente de inventario, quiero poder gestionar el stock de medicamentos en el almacén para asegurar que siempre haya suficiente stock disponible y evitar caducidades.

#### Criterios de Aceptación:
1. El sistema debe permitir agregar nuevos medicamentos con las propiedades `id`, `nombre`, `cantidad`, `fechaDeCaducidad` y `precio`.
2. El sistema debe permitir actualizar la cantidad de un medicamento existente.
3. El sistema debe permitir eliminar medicamentos caducados automáticamente.
4. El sistema debe permitir listar todos los medicamentos disponibles y mostrar su información detallada.

#### Implementación en TypeScript:
- Crear una interfaz `Medicamento` con las propiedades necesarias.
- Implementar una clase `Inventario` con métodos para agregar, actualizar, eliminar y listar medicamentos.
- Utilizar métodos estáticos para gestionar el inventario.
- Asegurar que los métodos verifican el tipo de datos de las propiedades y realizan las operaciones necesarias.

### Historia de Usuario 2: Registro de Pacientes y Prescripciones

#### Descripción:
Como doctor, quiero poder registrar pacientes y sus prescripciones para llevar un control detallado de los tratamientos asignados.

#### Criterios de Aceptación:
1. El sistema debe permitir registrar nuevos pacientes con las propiedades `id`, `nombre`, `edad`, `historialMedico`.
2. El sistema debe permitir añadir prescripciones a un paciente con las propiedades `medicamentoId`, `dosis`, `frecuencia` y `duración`.
3. El sistema debe permitir listar todas las prescripciones de un paciente.
4. El sistema debe asegurar que solo medicamentos disponibles en el inventario pueden ser prescritos.

#### Implementación en TypeScript:
- Crear una interfaz `Paciente` y una interfaz `Prescripcion`.
- Implementar una clase `RegistroPacientes` con métodos para registrar pacientes y añadir prescripciones.
- Utilizar métodos para listar prescripciones y verificar la disponibilidad de medicamentos en el inventario.
- Asegurar el uso de tipos estáticos para todas las propiedades y métodos.

### Historia de Usuario 3: Análisis de Datos de Tratamientos

#### Descripción:
Como analista de datos, quiero poder analizar los datos de tratamientos para identificar patrones y mejorar la eficiencia del tratamiento de pacientes.

#### Criterios de Aceptación:
1. El sistema debe permitir filtrar tratamientos por medicamento, frecuencia y duración.
2. El sistema debe generar estadísticas sobre el uso de medicamentos, incluyendo el total de dosis administradas y la frecuencia de uso.
3. El sistema debe permitir exportar los datos filtrados y las estadísticas en formato CSV.
4. El sistema debe asegurar que los datos son precisos y están actualizados.

#### Implementación en TypeScript:
- Crear una clase `AnalisisDatos` con métodos para filtrar tratamientos y generar estadísticas.
- Utilizar funciones y métodos estáticos para realizar análisis y exportar datos.
- Asegurar que los métodos verifican el tipo de datos y realizan las operaciones necesarias.
- Utilizar bibliotecas de terceros como `csv-writer` para exportar los datos en formato CSV.
