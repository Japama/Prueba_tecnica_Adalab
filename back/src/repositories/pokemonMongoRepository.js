const { ObjectId, Int32 } = require('mongodb');
const getDb = require('../config/mongoDb');

const getPokemonList = async () => {
    try {
        const db = getDb();
        const collection = db.collection('Pokemons');
        const pokemons = await collection.find({}).toArray();
        return pokemons;
    } catch (err) {
        console.error('Error al obtener la lista de Pokemons:', err);
        throw err; // Propaga el error para manejarlo en el controlador
    }
};

const getPokemonById = async (id) => {
    try {
        const db = getDb();
        const collection = db.collection('Pokemons'); 
        const pokemon = await collection.findOne({Id: parseInt(id)});
        return pokemon;
    } catch (err) {
        console.error('Error al obtener el Pokemon:', err);
        throw err; // Propaga el error para manejarlo en el controlador
    }
};


module.exports = {
    getPokemonList,
    getPokemonById
};