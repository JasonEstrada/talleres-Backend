const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

let usuarios = require('./datos.json');

// Punto 1:
app.get('/users/hobby', (req, res) => {
  const { hobby } = req.query;
  const resultado = usuarios.filter(user => user.hobbies.includes(hobby));
  res.json(resultado);
});


// Punto 2:
app.get('/users/exists', (req, res) => {
  const { codigo } = req.query;
  const existe = usuarios.some(user => user.codigo === codigo);
  res.json({ existe });
});


// Punto 3:
app.get('/users/hobby/count', (req, res) => {
  const { hobby } = req.query;
  const cantidad = usuarios.filter(user => user.hobbies.includes(hobby)).length;
  res.json({ cantidad });
});


// Punto 4:
app.get('/users/is-free', (req, res) => {
  const libres = usuarios.filter(user => user.hobbies.length < 3);
  res.json(libres);
});


// Punto 5:
app.post('/users/suggest', (req, res) => {
  const { codigo, hobby } = req.body;
  const user = usuarios.find(u => u.codigo === codigo);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  if (user.hobbies.length >= 3) {
    return res.json({ mensaje: "El usuario ya tiene 3 hobbies. No se agregó." });
  }

  user.hobbies.push(hobby);
  res.json({ mensaje: "Hobby agregado", usuario: user });
});


// Punto 6:
app.post('/users', (req, res) => {
  const nuevo = req.body;
  if (!nuevo.codigo || !nuevo.nombre || !nuevo.apellido || !Array.isArray(nuevo.hobbies) || nuevo.hobbies.length < 2) {
    return res.status(400).json({ error: "Datos incompletos o inválidos" });
  }

  if (usuarios.some(u => u.codigo === nuevo.codigo)) {
    return res.status(400).json({ error: "El código ya existe" });
  }

  usuarios.push(nuevo);
  res.status(201).json({ mensaje: "Usuario agregado", usuario: nuevo });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});