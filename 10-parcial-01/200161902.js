const datos = require("./datos.json");

/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

function puntoUno(estudiantes) {
  let enCondicional = 0;

  estudiantes.forEach(estudiante => {
      let notas = estudiante.cursos.map(curso => curso.nota);
      let promedio = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;

      if (promedio < 3.3) {
          enCondicional++;
      }
  });

  return enCondicional;
}

console.log("Punto 1:", puntoUno(datos));

function puntoDos(estudiantes) {
  
  return estudiantes.map(estudiante => `${estudiante.nombre} ${estudiante.apellido}`);
}

console.log("Punto 2:", puntoDos(datos));


function puntoTres(estudiantes) {
  
  return estudiantes.sort((a, b) => a.altura - b.altura).map(estudiante => estudiante._id);
}

console.log("Punto 3:", puntoTres(datos));


function puntoCuatro(numeros) {

  if (numeros.length === 0) return 0;
  return numeros.reduce((sum, num) => sum + num, 0) / numeros.length;
}

numeros = [1, 20, 45,10,20,46, 50];

console.log("Punto 4:", puntoCuatro(numeros));

function puntoCinco(palabra) {
  
  let reversed = palabra.split('').reverse().join('');

  return palabra === reversed;
}

console.log("Punto 5:", puntoCinco("reconocer"));

function puntoSeis(palabra) {
  let reversed = palabra.split('').reverse().join('');
  
  return reversed;
}

console.log("Punto 6:", puntoSeis("hola"));

// CODIGO DE PUNTO 7 AQUI

function puntoSiete(lista, campo) {
  return lista.slice().sort((a, b) => {
      if (a[campo] < b[campo]) return -1;
      if (a[campo] > b[campo]) return 1;
      return 0;
  });
}

console.log("Punto 7:", puntoSiete(datos, "altura"));
