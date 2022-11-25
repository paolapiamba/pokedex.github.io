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
      <h1>pokemon</h1>
      <div className="app">
        <input type="text" value={pokemon} onChange={onChangeFn} />
        <button type="button" className="btn btn-light" onClick={onClicsFn}>buscar</button>
        <br />
        <img src={pokemonD.sprites.front_default} className="imagen" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">experiencia</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">altura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{pokemonD.order}</th>
              <td>{pokemonD.base_experience}</td>
              <td>{pokemonD.name}</td>
              <td>{pokemonD.height}</td>


            </tr>

          </tbody>
        </table>

      </div>
    </>
  )
}
export default App;
