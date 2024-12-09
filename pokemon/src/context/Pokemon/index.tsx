import type { FC } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PokemonContextProps, PokemonContextValue } from './types';
import { NamedAPIResource, PokemonClient } from 'pokenode-ts';

const PokemonContext = createContext<PokemonContextValue | undefined>(
  undefined
);

const PokemonProvider: FC<PokemonContextProps> = ({ children }) => {
  const api = useMemo(() => new PokemonClient(), []);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<NamedAPIResource[]>();

  useEffect(() => {
    setLoading(true);
    const fetchInitialList = async () => {
      try {
        const request1 = api.listPokemons(0, 50);
        const request2 = api.listPokemons(50, 50);
        const request3 = api.listPokemons(100, 51);

        const [resp1, resp2, resp3] = await Promise.all([
          request1,
          request2,
          request3,
        ]);

        const newList = [...resp1.results, ...resp2.results, ...resp3.results];

        setList(newList);
        console.log({ newList });
      } finally {
        setLoading(false);
      }
    };

    fetchInitialList();
  }, [api]);

  const value: PokemonContextValue = { list, api, loading };

  return (
    <PokemonContext.Provider {...{ value }}>{children}</PokemonContext.Provider>
  );
};

PokemonProvider.displayName = 'PokemonProvider';

export const usePokemon = (): PokemonContextValue => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      'usePokemonList must be used within a PokemonListContextProvider'
    );
  }

  return context;
};

export default PokemonProvider;
