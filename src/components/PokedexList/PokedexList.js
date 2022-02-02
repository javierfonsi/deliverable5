import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PokemonCard.css"
import Color from './Color';

const PokedexList = ({urlSinglePokemon}) => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({type: []});
    const [type, setType] = useState('');
    
    useEffect(()=>{
        axios.get(urlSinglePokemon)
        .then(res => {
            setPokemon({
              name: res.data.name,
              id: res.data.id,
              image: res.data.sprites?.other.dream_world?.front_default,
              type: res.data.types,
              hp: res.data.stats[0].base_stat,
              attack: res.data.stats[1].base_stat,
              defense: res.data.stats[2].base_stat,
              speed: res.data.stats[5].base_stat
            })
            setType(res.data.types[0].type.name)
          });
        }, [urlSinglePokemon]);


  return (
      <div className='container-card' style={{background: Color(type)}}>
          <h2>{pokemon.name}</h2>
            {
                pokemon?.type?.map( (type, index )=>
                <h4 key={index}>Types: {type.type.name}</h4>
                )
            }
            
            <ul>
                <li >hp: {pokemon.hp}</li>
                <li>attack: {pokemon.attack}</li>
                <li>defense: {pokemon.defense}</li>
                <li>speed: {pokemon.speed}</li>
            </ul>
          

            <img src={pokemon.image} alt=""/>

            <button onClick={() => navigate(`/pokedex/${pokemon.id}`)}>Ver mas</button>
          
        
          

      </div>
  )
};

export default PokedexList;
