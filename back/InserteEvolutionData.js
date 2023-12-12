const axios = require('axios');
const db = require('./db');

const getEvolutionData = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de evolución:', error);
  }
};

const updateEvolutionInDB = (evolvesFrom, evolvesTo) => {
  const sql = `UPDATE adalab.Pokemons SET EvolutionFrom = ${evolvesFrom ? `'${evolvesFrom}'` : 'NULL'} WHERE Name = '${evolvesTo}'`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Evolución actualizada: ${evolvesFrom} -> ${evolvesTo}`);
  });
};

const processEvolutionChain = (chain, evolvesFrom = null) => {
  if (chain.species) {
    updateEvolutionInDB(evolvesFrom, chain.species.name);

    chain.evolves_to.forEach(evolvesToChain => {
      processEvolutionChain(evolvesToChain, chain.species.name);
    });
  }
};

const updateAllEvolutions = async () => {
  for (let id = 1; id <= 151; id++) {
    const evolutionData = await getEvolutionData(id);
    if (evolutionData) {
      processEvolutionChain(evolutionData.chain);
    }
  }
};

updateAllEvolutions();
