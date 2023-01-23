import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(pokeApi)
      .then(resp => resp.json())
      .then(json => console.log(json) || setPokemon(json.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div data-testid="app">
      <Navigation />

      {pokemon.map(poke => {
        const pokemonId = +poke.url.split("/")[6];
        return (
          <PokemonCard
            key={pokemonId}
            name={poke.name}
            url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          />
        );
      })}
    </div>
  );
}

export { App };
