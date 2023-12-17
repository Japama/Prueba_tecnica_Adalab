const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Rutas de listado de pokemon
router.get('/pokemon/list', pokemonController.getPokemons);
router.get('/pokemon/listMongo', pokemonController.getPokemonsMongo);

// Rutas de pokemon especifico
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/pokemon/mongo/:id', pokemonController.getPokemonMongo);

// Rutas de filtrado
router.get('/pokemon/filter/:filter', pokemonController.filterPokemons);
router.get('/pokemon/filterMongo/:filter', pokemonController.filterPokemonsMongo);

module.exports = router;
