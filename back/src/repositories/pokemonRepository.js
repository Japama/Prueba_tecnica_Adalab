const db = require('../config/db');


const getPokemonList = async () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Pokemons", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const getPokemonById = async (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Pokemons WHERE Id = ?", [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const getPokemonFilter = async (filter) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Pokemons WHERE Name LIKE '%" + filter + "%'", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getPokemonList,
    getPokemonById,
    getPokemonFilter
};