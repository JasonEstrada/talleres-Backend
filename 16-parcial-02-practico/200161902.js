const datos = require("./datos.json");


function puntoUno(estudiantes, nom_extra) {
  // CODIGO DE PUNTO 1 AQUI
  estInnova = estudiantes.filter((estudiante) => estudiante.info_extra_curriculares.find(
    (extracurricular) => extracurricular.nombre == nom_extra));
  return estInnova.map((estudiante) => estudiante.info_personal.correo);
}

console.log(puntoUno(datos, "INNOVA"));

function promedioMateria(materia) {
  return materia.notas.reduce((acumulado, nota) => acumulado + nota.nota, 0) / materia.notas.length;
}

function promedioEstudiante(estudiante) {
  let notas = estudiante.info_matricula;

  let promAcum = notas.map(
    (notas) => promedioMateria(notas)).reduce((a, b) => a + b) / notas.length;

  let maxSemestre = Math.max(...estudiante.info_matricula.map((n) => n.semestre));
  
  let nombreCompleto = `${estudiante.info_personal.nombre} ${estudiante.info_personal.apellido}`;

  return { nombre: nombreCompleto, prom: promAcum, semestre: maxSemestre };
}

// CODIGO DE PUNTO 2 AQUI
function puntoDos(estudiantes, semestre) {
  let listProm = estudiantes.map((estudiante) => promedioEstudiante(estudiante));

  let estudiantesSemestre = listProm.filter((pers) => pers.semestre === semestre);

  if (estudiantesSemestre.length > 0) {
    let mejorEstudiante = estudiantesSemestre.reduce(
      (max, estudiante) => estudiante.prom > max.prom ? estudiante : max
    );
    return `${mejorEstudiante.nombre}`;
  }
  return []
}


console.log(puntoDos(datos, 5));

// CODIGO DE PUNTO 3 AQUI
function formatearDatos(item) {
  const gender = item.info_personal.gender;
  let titulo
  if (gender =="M") {
    titulo = "Sr.";
  } else if (gender == "F") {
    titulo = "Sra.";
  }
  const nombreCompleto = `${item.info_personal.nombre} ${item.info_personal.apellido}`;
  const primerNombre = item.info_personal.nombre;
  const primerApellido = item.info_personal.apellido;
  const altura = item.info_personal.altura * 100;
  const edad = 2024 - item.info_personal.nacimiento.substr(0, 4);
  const nacimiento = item.info_personal.nacimiento;
  const correo = item.info_personal.correo;
  const usuario = item.info_personal.correo.split("@")[0];
  return {gender, titulo, nombreCompleto, primerNombre, primerApellido, altura, edad, nacimiento, correo, usuario}
}

function puntoTres(estudiantes) {
  lista = estudiantes.filter((estudiante) => estudiante.info_matricula.sort(
    (a,b) => b.semestre - a.semestre
  )[0].semestre === 1);
  return lista.map(formatearDatos);
}

console.log(puntoTres(datos));

// CODIGO DE PUNTO 4 AQUI
function puntoCuatro(estudiantes) {

  const estudiantesConSemestreActual = estudiantes.map((estudiante) => {
    const semestreActual = Math.max(...estudiante.info_matricula.map((curso) => curso.semestre));
    //console.log(estudiante._id + " " + semestreActual)
    return {
      ...estudiante,
      semestreActual
    };
  });

  const estudiantesEnBaloncesto = estudiantesConSemestreActual.filter((estudiante) => {
    const actividadesSemestreActual = estudiante.info_extra_curriculares.filter((extra) => extra.semestre === estudiante.semestreActual);
    //console.log(actividadesSemestreActual)
    return actividadesSemestreActual.some((actividad) => actividad.nombre === 'Baloncesto');
  });

  if (estudiantesEnBaloncesto.length === 0) {
    return [];
  }

  const estudianteMasAlto = estudiantesEnBaloncesto.reduce((max, estudiante) =>
    estudiante.info_personal.altura > max.info_personal.altura ? estudiante : max
  );

  return `${estudianteMasAlto.info_personal.nombre} ${estudianteMasAlto.info_personal.apellido}`;
}


console.log(puntoCuatro(datos));
