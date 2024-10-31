const { readFromMyFile, writeToMyFile, addToMyFile } = require("./fileUtil.js");
const { getPokemonById , createUser} = require("./axiosAPI.js");

// console.log(readFromMyFile());

// const text = `hello my name is elad
// and I teach fullstack`;

// writeToMyFile(text);
// const text2 = `
// Maor loves to teach FullStack as well
// blablabla`;

// addToMyFile(text2)
async function loadPokemon() {
  console.log(await getPokemonById(2));
}
loadPokemon();

const newUser = {
  firstName: "lalalalalalala",
  lastName: "babnabababababa",
  email: "email@lalala",
  password: "password123",
};

async function useCreateUser (user){
    console.log(await createUser(user));
    
}
useCreateUser(newUser);
