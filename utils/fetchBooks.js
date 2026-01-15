const axios = require("axios");
const urlLibros = "https://api-books-ac3j.onrender.com/books";

async function fetchBooks() {
  try {
    const response = await axios.get(urlLibros);
    const data = response.data;
    return data;
  } catch {
    return { error: "No se han encontrado los libros" };
  }
}

module.exports = fetchBooks;
