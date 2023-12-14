import React, { useState, useEffect } from 'react';
import './PokemonList.sass'; // Importa el archivo SCSS aquí
import { Pokemon } from './Pokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
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
    
        fetchPokemons();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez
    
    return (
        <div className="list">
            <input className='filtro' type="text" placeholder="Filtra pokémon por nombre" />
            <div className='pokemon-grid-container'>
            {pokemons.map(pokemon => (
                 <div key={pokemon.Id}> <PokemonCard pokemon={pokemon}/> </div> // Ajusta según la estructura de tus datos
            ))}
            </div>
        </div>
    );
};

export default PokemonList;
