import React, { useState, useEffect } from 'react';
import './PokemonList.sass'; // Importa el archivo SCSS aquí
import { Pokemon } from './Pokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [useMysql, setUseMysql] = useState(false);
    const [useLocal, setUseLocal] = useState(false);
    const [filterText, setFilterText] = useState('');

    const fetchAndFilterPokemons = async () => {
        let url = 'http://localhost:3003/api/pokemon/';

        if (useMysql) {
            url += filterText ? `filter/${filterText}` : 'list';
        } else {
            url += filterText ? `filterMongo/${filterText}` : 'listMongo';
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            const pokemonInstances = data.map(item => new Pokemon(item));
            setPokemons(pokemonInstances);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchAndFilterPokemons();
    }, [useMysql, filterText]);

    const handleChange = async (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            if (name === 'mysql') {
                setUseMysql(checked);
            }
            if (name === 'local') {

            }
        } else if (type === 'text') {
            setFilterText(value);
        }
    }

    return (
        <div className="list">
            <label htmlFor="mysql">MySQL</label>
            <input type='checkbox' name="mysql" id="mysql" onChange={handleChange} />
            <input className='filtro' name="filter" type="text" placeholder="Filtra pokémon por nombre" onChange={handleChange} />
            <input type='checkbox' name="local" id="local" onChange={handleChange} />
            <label htmlFor="local">Filtrado local</label>
            <div className='pokemon-grid-container'>
                {pokemons.map(pokemon => (
                    <div key={pokemon.Id}> <PokemonCard pokemon={pokemon} /> </div> // Ajusta según la estructura de tus datos
                ))}
            </div>
        </div>
    );
};

export default PokemonList;

