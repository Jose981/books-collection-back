const express = require("express");
const route = express.Router();
const axios = require("axios");
const fetchBooks = require("../utils/fetchBooks");
const fetchUsers = require("../utils/fetchUsers");

// Inicio
route.get("/", (req, res) => {
  res.send("Funciona!!");
});

//Obtener usuarios
route.get("/users", async (req, res) => {
  const data = await fetchUsers();
  res.json(data);
});

//Obtener libros
route.get("/books", async (req, res) => {
  const data = await fetchBooks();
  res.json(data);
});

module.exports = route;
