import React, { useState, useEffect } from 'react';
import './PokemonList.sass'; // Importa el archivo SCSS aquí
import { Pokemon } from './Pokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const fetchPokemons = async () => {
        try {
            const response = await fetch('http://localhost:3003/api/pokemon/list');
            const data = await response.json();
            const pokemonInstances = data.map(item => new Pokemon(item));
            setPokemons(pokemonInstances);
            console.log(pokemonInstances);
        } catch (error) {
            console.error('Error al cargar pokemons:', error);
        }
    };
    useEffect(() => {


        fetchPokemons();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez

    const handleChange = async (event) => {
        const filter = event.target.value;
        console.log(filter);
        if (filter === '')
            fetchPokemons();
        else {
            try {
                const response = await fetch('http://localhost:3003/api/pokemon/filter/' + filter);
                const data = await response.json();
                const pokemonInstances = data.map(item => new Pokemon(item));
                setPokemons(pokemonInstances);
                console.log(pokemonInstances);
            } catch (error) {
                console.error('Error al cargar pokemons filtrados:', error);

            };
        }
    }

    return (
        <div className="list">
            <input className='filtro' name="filter" type="text" placeholder="Filtra pokémon por nombre" onChange={handleChange} />
            <div className='pokemon-grid-container'>
                {pokemons.map(pokemon => (
                    <div key={pokemon.Id}> <PokemonCard pokemon={pokemon} /> </div> // Ajusta según la estructura de tus datos
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
