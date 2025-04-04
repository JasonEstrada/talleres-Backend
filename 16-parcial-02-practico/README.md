
# Parcial 02

> ## Instrucciones:
>
> - Abrir carpeta del parcial usando VSCode.
> - Para realizar pruebas, puede ejecutar el archivo usando el comando `node [nombre-de-archivo]`
> - Leer detenidamente cada punto, desarrollar en el orden deseado.
> - Utilizar el archivo parcial2.js, renombrar el archivo a [codigo de estudiante].js.
> - No renombrar las funciones de los puntos.
> - Siga la guía de nombramiento de funciones.
> - Pueden desarrollar funciones auxiliares.
> - Cualquier codigo por fuera de funciones no será tomado en cuenta.
> - Solo se envía el archivo parcial1.js (con el nombre modificado).

## Puntos

1. Implemente una función que reciba los datos de estudiantes y el nombre de una extracurricular y retorne los correos de los estudiantes que han estado involucrados en esa extra curricular, como por ejemplo los correos de los ~140 estudiantes que han estado involucrados en la extra curricular INNOVA.

2. Implemente una función que reciba los datos de estudiantes y un semestre y retorne el nombre completo del estudiante de mayor promedio, como por ejemplo el estudiante de quinto semestre con ~3.7 de promedio.

3. Implemente una función que reciba los datos de estudiantes y retorne la información personal de los estudiantes de primer semestre modificados para tener el siguiente formato:

```js
{
  "gender": "M",
  "titulo": "Sr.",
  "nombreCompleto" : "Luis Molina",
  "primerNombre": "Luis",
  "primerApellido": "Molina",
  "altura": 182,
  "edad": 19,
  "nacimiento": "2004-10-14",
  "correo": "lmolina@uninorte.edu.co",
  "usuario": "lmolina"
},
```

4. Implemente una función que reciba los datos de estudiantes y retorne el nombre completo del estudiante mas alto inscrito en Baloncesto en el semestre actual, como por ejemplo el estudiante que mide ~1.9m de altura.

---

## Información Adicional

- Todos los cursos de un estudiante tienen el mismo peso sobre su promedio actual.

- El semestre de un estudiante es equivalente al mayor semestre en su matricula.

- El archivo datos.json contiene datos de estudiantes para que realicen pruebas. A continuación pueden ver un ejemplo de un estudiante:

- Los estudiantes tienen una cantidad variable de cursos, y extra curriculares.

```json
{
  "_id": "par02estid001",
  "info_personal": {
    "gender":"M",
    "nombre":"Luis",
    "apellido":"Molina",
    "altura": 1.82,
    "nacimiento": "2004-10-14",
    "correo":"lmolina@uninorte.edu.co"
  },
  "info_matricula": [
    {
      "name": "Inglés I",
      "notas": [
        {
          "nota": 1.4,
          "peso": 0.2
        },
        {
          "nota": 4.7,
          "peso": 0.2
        },
        {
          "nota": 0.2,
          "peso": 0.2
        },
        {
          "nota": 4,
          "peso": 0.2
        },
        {
          "nota": 3.9,
          "peso": 0.2
        }
      ],
      "semestre": 1
    }
  ],
  "info_extra_curriculares": [
    {
      "nombre": "Fotografía",
      "semestre": 1
    },
    {
      "nombre": "Voleibol",
      "semestre": 2
    }
  ]
}
```
