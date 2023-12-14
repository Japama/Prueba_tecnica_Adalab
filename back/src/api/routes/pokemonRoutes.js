const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/pokemon/list', pokemonController.getPokemons);
router.get('/pokemon/filter/:filter', pokemonController.filterPokemons);
router.get('/pokemon/listMongo', pokemonController.getPokemonsMongo);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/pokemon/mongo/:id', pokemonController.getPokemonMongo);
module.exports = router;
