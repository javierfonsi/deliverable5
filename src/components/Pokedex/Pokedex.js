import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PokedexList from '../PokedexList/PokedexList';
import PokemonCard from '../PokedexList/PokemonCard';
import './pokedex.css'


const Pokedex = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [pokemonTypes, setPokemonTypes] = useState([])
  const name = useSelector(state => state.name)
  const [pokemonList, setPokemonList]= useState([])
  const [firstPage, setFirstPage] = useState([])

  useEffect(() =>{
      axios.get('https://pokeapi.co/api/v2/type')
      //axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then(res => setPokemonTypes(res.data.results))        
        .catch(err => console.log(err))
      axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then(res => setFirstPage(res.data.results))
  },[]) 

  const filterTypePokemon = (e) =>{
      //console.log(e.target.value)
      if(e.target.value==="all"){
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then(res => setFirstPage(res.data.results))
        setPokemonList([])
          
      }else{
        axios.get(e.target.value)
        .then(res => setPokemonList(res.data.pokemon))
        setFirstPage([])
      }
      //console.log(pokemonList) 
  }

  const logOut = () => {
    dispatch({type:"DELETE_USER"})
    navigate("/")
  }
  
  return (
    <div className='container-pokemons'>
      <button className='out-button' onClick={() => logOut()}>
        <i class="fas fa-door-closed fa-2x"></i>
      </button>
      <h1>Welcome to Pokedex: {name}</h1>
      <div className='container-select'>
        <select onChange={filterTypePokemon} >
          <option value="all">All types pokemons</option>          
          {pokemonTypes?.map((pokemonType) => (              
            <option 
              key={pokemonType.url} 
              value={pokemonType.url}> 
              {pokemonType.name}
            </option>
          ))}
        </select>
      </div>
      <div className='container-cards'>
      {
        pokemonList?.map(pokemon => 
        <PokedexList
          key={pokemon.pokemon.url}
          urlSinglePokemon={pokemon.pokemon.url}
        />
        )
      }
      {
        firstPage?.map(allpokemon =>
          <PokemonCard
            key={allpokemon.url}
            url={allpokemon.url}
          />)
      }
      </div>
        
          
    </div>
  )};

  // <select onChange={(e) => filterCharacters(e.target.value)}>
  //       {locations.map((location) => (
  //         <option key={location.id} value={location.id}>
  //           {location.name}
  //         </option>
  //       ))}
  //     </select>

export default Pokedex;
