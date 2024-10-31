const axios = require('axios');
// const cors = require('cors')

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const express = require('express');
const app = express();
const port = 3000;

const pokemons = []


app.get("/user", (req, res) => {
   
    res.send('Hello World')
   })
// app.use(cors());
app.get('/pokemon/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pokemon = await axios.get(`${BASE_URL}/${id}`);
    //     pokemons.forEach(element => {
    //     if (element === pokemon)
    //     {
    //         return element;
    //     }
    // })
        // const newPokemon = getPokemonMinimalData(pokemon)
        // pokemon.push(newPokemon)
        res.status(200).json(pokemon.data);
    } catch (error) {
        console.log(error);
    }
});


function getPokemonMinimalData(pokemon) {
    minPokemon = pokemon.name;
    return minPokemon;
}

app.listen(port, ()=> {console.log(`server listen to port:  ${port}`);
});


