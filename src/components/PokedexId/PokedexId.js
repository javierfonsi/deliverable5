import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './pokedexId.css'

const PokedexId = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [type, setType] = useState("");
  const [pokemon, setPokemon] = useState({
    type: [],
    abilities: [],
    moves: [],
  });
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemon({
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites?.other.dream_world?.front_default,
          type: res.data.types,
          height: res.data.height,
          weight: res.data.weight,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          abilities: res.data.abilities,
          moves: res.data.moves,
        });
        setType(res.data.types[0].type.name);
      });
  }, [id])

  const marginhp = 100 -(pokemon.hp/150)*100  
  const marginTotalhp = `${marginhp}%`
  
  const marginSpeed = 100 -(pokemon.speed/150)*100
  const marginTotalSpeed = `${marginSpeed}%`

  const marginAttack = 100 -(pokemon.attack/150)*100
  const marginTotalAttack = `${marginAttack}%`

  const marginDefense = 100 -(pokemon.defense/150)*100
  const marginTotalDefense = `${marginDefense}%`

  return (
    <div className='container-selected'>
      <div className='container-button'>
        <button className='back-button' onClick={() => navigate("/pokedex")}>
          <i class="fas fa-chevron-circle-left fa-2x"></i>
        </button>  
      </div>
      <img src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="" />
      <section className='container'>
        <div className='container-info'>
          <div className='container-principal'>
            <img src={pokemon.image} alt="" />
            <div className='container-info-text'>
              <h6></h6>
              <h6>{pokemon.weight} <br /> Weigth </h6>
              <h3>{pokemon.name}</h3>
              <h6>{pokemon.height} <br /> Heigth </h6>
            </div>
            <p># {pokemon.id}</p>
          </div>  
            <div className='type-ability'>
              <div className='type'>
                  <h2>Type</h2>
                  <article className='container-type'>
                    {
                      pokemon?.type?.map( element =>
                        <p key={element.type.name}>{element.type.name}</p>)
                    }
                  </article>
              </div>

              <div className='ability'>
                <h2>Abilities</h2>
                <article className='container-type'>
                  {
                    pokemon?.abilities?.map( element =>
                      <p key={element.ability.name}>{element.ability.name}</p>)
                  }
                </article>
              </div>
            </div>

            <div className='container-stats'>
              <div className='contain-stats'>
                <article style={{marginRight: marginTotalhp}}>
                  <h5 className='stats-hp'>HP: {pokemon.hp}/150 </h5>
                  
                </article>
              </div>

            <div className='contain-stats'>
              <article style={{marginRight: marginTotalSpeed}}>
                <h5 className='stats-speed'>Speed: {pokemon.speed}/150 </h5>  
              </article>
            </div>

            <div className='contain-stats'>
              <article style={{marginRight: marginTotalAttack}}>
                <h5 className='stats-hp'>Attack: {pokemon.attack}/150 </h5>
              </article>
            </div>

            <div className='contain-stats'>
              <article style={{marginRight: marginTotalDefense}}>
                <h5 className='stats-defense'>Defense: {pokemon.defense}/150 </h5>
                
              </article>
            </div>    
          </div>
        </div>

        <aside className='move'>
          <div className='list_moves'> 
            <h3>Movements</h3>           
            {
              pokemon?.moves?.map( element =>
                <p key={element.move.name}>{element.move.name}</p>)
            }
          </div>               
        </aside>
      </section>
    </div>
  )};

export default PokedexId;