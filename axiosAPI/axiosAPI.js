const { default: axios } = require("axios");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const USER_BASE_URL = "https://66c320a6d057009ee9bf26e2.mockapi.io/api/v1/User";

const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (user) => {
  try {
    const response = await axios.post(USER_BASE_URL, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPokemonById,createUser};
