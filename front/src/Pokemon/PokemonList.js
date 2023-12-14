import React from 'react';
import './PokemonList.sass'; // Importa el archivo SCSS aquí

const PokemonList = () => {
    return (
        <div className="list">
            <input className='filtro' type="text" placeholder="Filtra pokémon por nombre" />

            <br/>
        </div>
    );
};

export default PokemonList;
