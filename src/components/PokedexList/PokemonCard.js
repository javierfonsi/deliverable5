import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import './PokemonCard.css'
import Color from './Color';

const PokemonCard = ({ url }) => {

    
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({type: []});
    const [type, setType] = useState('');
  
    useEffect(()=>{
      axios.get(url)
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
      }, [url]);
    //console.log(pokemon.id)


    return (
      <div style={{background: Color(type)}} className='container-card'>
        <h2>{pokemon.name}</h2>

        {
          pokemon?.type?.map( (type, index )=>
          <h4 key={index}>Types: {type.type.name}</h4>
          )
        }

        <ul>
          <li>hp: {pokemon.hp}</li>
          <li>attack: {pokemon.attack}</li>
          <li>defense: {pokemon.defense}</li>
          <li>speed: {pokemon.speed}</li>
        </ul>
        <img className='Imagen' src={pokemon.image} alt="" />
        <button onClick={() => navigate(`/pokedex/${pokemon.id}`)}>View more</button>
        
      </div>
    );
  };

export default PokemonCard;
