const axios = require('axios');
const db = require('./db');

const getPokemonData = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos del Pokémon:', error);
  }
};

const insertPokemonData = async () => {
  for (let id = 1; id <= 151; id++) {
    const data = await getPokemonData(id);
    if (data) {
      const { name, types, sprites } = data;
      const type1 = types[0]?.type.name;
      const type2 = types[1]?.type.name || null;
      const image = sprites.front_default;
      const evolutionFrom = null; // Necesitas una lógica adicional para esto

      const sql = `INSERT INTO adalab.Pokemons (idPokemons, Name, Tipe1, Type2, Image, EvolutionFrom) VALUES (${id}, '${name}', '${type1}', ${type2 ? `'${type2}'` : 'NULL'}, '${image}', ${evolutionFrom ? `'${evolutionFrom}'` : 'NULL'})`;

      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Pokemon ID ${id} (${name}) insertado correctamente`);
      });
    }
  }
};

insertPokemonData();
