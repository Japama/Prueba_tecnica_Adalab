import React from 'react';
import './PokemonCard.sass';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.Id}`); 
    };

    return (
        <div className="pokemon-card" onClick={handleClick}>
            <div className="pokemon-image-container">
                <img src={pokemon.Image} alt={pokemon.Name} className="pokemon-image" />
                <div className="pokemon-id">ID / {pokemon.Id}</div>
            </div>
            <div className="pokemon-info-container">
                <div className="pokemon-info">
                    <h2>{pokemon.Name}</h2>
                    <p><span className={"type " + pokemon.Type1}><b>{pokemon.Type1.toUpperCase()}</b> </span> <span className={"type " + pokemon.Type2}><b>{pokemon.Type2.toUpperCase()}</b></span></p>
                    <div className='evolution-container'>
                        {pokemon.EvolutionFrom ? (
                            <p className='evolution'>Evoluciona de: <br /> {pokemon.EvolutionFrom}</p>
                        ) : (
                            <p>&nbsp;</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;