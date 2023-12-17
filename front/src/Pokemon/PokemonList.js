import React, { useState, useEffect, useCallback } from 'react';
import './PokemonList.sass'; // Importa el archivo SCSS aquí
import { Pokemon } from './Pokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [useMysql, setUseMysql] = useState(false);
    const [useLocal, setUseLocal] = useState(false);
    const [filterText, setFilterText] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const filterPokemonsLocally = (filter) => {

        if (filter) {
            const filtered = pokemons.filter(pokemon =>
                pokemon.Name.toLowerCase().includes(filter.toLowerCase())
            );
            setFilteredPokemons(filtered);
        } else {
            setFilteredPokemons(pokemons);
        }
    };

    const fetchAndFilterPokemons = useCallback(async () => {
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
    }, [useMysql, filterText]);

    useEffect(() => {


        if (!useLocal) {
            fetchAndFilterPokemons();
        }
    }, [useLocal, fetchAndFilterPokemons]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            if (name === 'mysql') {
                setUseMysql(checked);
            }
            if (name === 'local') {
                setUseLocal(checked);
                if (checked) {
                    filterPokemonsLocally(filterText);
                } else {
                    fetchAndFilterPokemons();
                }
            }
        } else if (type === 'text') {
            setFilterText(value);
            if (useLocal) {
                filterPokemonsLocally(value);
            }
        }
    };

    return (
        <div className="list">
            <label htmlFor="mysql">MySQL</label>
            <input type='checkbox' name="mysql" id="mysql" onChange={handleChange} />
            <input className='filtro' name="filter" type="text" placeholder="Filtra pokémon por nombre" onChange={handleChange} />
            <input type='checkbox' name="local" id="local" onChange={handleChange} />
            <label htmlFor="local">Filtrado local</label>
            <div className='pokemon-grid-container'>
                {(useLocal ? filteredPokemons : pokemons).map(pokemon => (
                    <div key={pokemon.Id}> <PokemonCard pokemon={pokemon} /> </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;

