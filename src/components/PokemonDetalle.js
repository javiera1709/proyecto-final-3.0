import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PokemonDetalle = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <p>No se pudo cargar la información del Pokémon.</p>;
  }

  return (
    <div className='mt-5 mx-3 pt-5'>
    <h2 className='d-inline-block text-white p-3 bg-warning rounded'>Información del producto</h2>
    <h1 className='text-center text-uppercase fw-bold'>{pokemon.name}</h1>
    <div className='row mt-5'>
      <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <div>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className='img-fluid'
            style={{ maxWidth: '200px', height: '200px' }}
          />
          <h6 className='mt-3 text-center'>Precio: ${Math.floor(Math.random() * 100) + 1}</h6>
        </div>
      </div>
  
      <div className='col-md-6 d-flex align-items-center'>
        <div>
          <h5>Tipo(s):</h5>
          <p>{pokemon.types.map((type) => type.type.name).join(', ')}</p>
  
          <h5>Primeras versiones del juego:</h5>
          <p>{pokemon.game_indices.slice(0, 5).map((game) => game.version.name).join(', ')}</p>
  
          <h5>Habilidades:</h5>
          <p>{pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        </div>
      </div>
    </div>
    <div className="text-center mt-5">
      <button className='btn btn-lg btn-primary'>
        <Link className="nav-link" to="/carrito">Ir al carrito</Link>
      </button>
    </div>
  </div>
  
  );
  
};

export default PokemonDetalle;
