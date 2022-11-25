import './App.css';
// import Pokemon from './Pokemon';
import { useState } from 'react';


function App() {
  const [pokemon, setpokemon] = useState('')
  const [pokemonD, setPokemonD] = useState({ sprites: { front_default: null } })

  const onChangeFn = (event) => {
    setpokemon(event.target.value)
  }

  const onClicsFn = () => {
    //setpokemon( {label: pokemon})
    console.log("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(response => response.json())
      .then(
        (PokemonData) => {
          console.log(PokemonData)
          setPokemonD(PokemonData)
        }
      )
  }

  return (
    <>
      <div className="app">
        <input type="text" value={pokemon} onChange={onChangeFn} />
        <button type="button" className="btn btn-light" onClick={onClicsFn}>buscar</button>
        <img src={pokemonD.sprites.front_default}></img>

      </div>
    </>
  )
}
export default App;
