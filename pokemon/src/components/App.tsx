import { useState } from 'react';
import { NamedAPIResource } from 'pokenode-ts';

import mockAllPokemon from '../assets/mockAllPokemon';

import List from './List';
import { ListEntry } from './List/types';
import DetailPage from './DetailPage';

function App() {
  // TODO: fetch list of pokemon from api #1 to #151, inclusive
  const [pokemonCollection] = useState<NamedAPIResource[]>(mockAllPokemon);

  console.log({ pokemonCollection });

  return (
    <>
      <div className="w-full h-full max-h-full flex gap-6">
        <List
          items={pokemonCollection as unknown as ListEntry[]}
          onItemClick={(item) => {
            console.log('item clicked', { item });
          }}
          className="w-1/3 max-w-[220px] bg-white"
        />
        <div className="w-full bg-white">
          <DetailPage />
        </div>
      </div>
    </>
  );
}

export default App;
