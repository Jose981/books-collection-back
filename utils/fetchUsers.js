const axios = require("axios");
const urlUsers = "https://api-books-ac3j.onrender.com/users";

async function fetchUsers() {
  try {
    const response = await axios.get(urlUsers);
    const data = response.data;
    return data;
  } catch {
    return { error: "No se han encontrado los usuarios" };
  }
}

module.exports = fetchUsers;
