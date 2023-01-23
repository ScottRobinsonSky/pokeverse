import React from 'react';

function PokemonCard({ url, name }) {

  return (
    <div>
      <h1>{name}</h1>
      <img src={url} />
    </div>
  );
}

export { PokemonCard };
