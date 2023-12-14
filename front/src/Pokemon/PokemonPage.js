import React from 'react';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonCard';
import './PokemonPage.sass'; // Importa el archivo SCSS aquí

function PokemonPage({ children }) {
    return (
        <div className="content">
            <h1> Pokedex </h1>
            <div className="triangle top-left"></div>
            <div className="triangle top-right"></div>
            <div className="circle bottom-left"></div>
            <div className="circle bottom-right"></div>
            {children}
        </div>
    );
}

export default PokemonPage;
