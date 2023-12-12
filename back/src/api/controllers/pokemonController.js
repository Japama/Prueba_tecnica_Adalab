const db = require('../../config/db');

const getPokemons = (req, res) => {
    db.query("SELECT * FROM Pokemons", function (err, result) {
      if (err) throw err;
      res.json({ message: 'Pokemon list', data: result });
    });
  };

  const getPokemon = (req, res) => {
    const pokemonId = req.params.id;
  
    db.query("SELECT * FROM Pokemons WHERE Id = ?", [pokemonId], function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener datos del Pokémon' });
      } else if (result.length === 0) {
        res.status(404).json({ message: 'Pokémon no encontrado' });
      } else {
        res.json({ message: 'Pokemon encontrado', data: result[0] });
      }
    });
  };

module.exports = { getPokemons, getPokemon };