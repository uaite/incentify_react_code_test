import type { FC } from 'react';
import { createContext, useContext, useState } from 'react';
import { PokemonContextProps, PokemonContextValue } from './types';
import { AppPkmnDetail, getPokemonClient } from '../../helpers';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const PokemonContext = createContext<PokemonContextValue | undefined>(
  undefined
);

const PokemonProvider: FC<PokemonContextProps> = ({ children }) => {
  const client = getPokemonClient();
  const [selectedName, setSelectedName] = useState('');
  const [selected, setSelected] = useState<AppPkmnDetail | undefined>(
    undefined
  );

  const fetchPokemons = async ({ pageParam }) => {
    const offset = Number(pageParam);
    const res = await client.listPokemons(offset, offset === 100 ? 51 : 50);
    return res;
  };

  const fetchPokemonByName = async () => {
    const res = await client.getPokemonByName(selectedName);
    return res;
  };

  const { data, isFetching, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['pokemonList'],
      queryFn: fetchPokemons,
      initialPageParam: '0',
      maxPages: 3,
      getNextPageParam: (lastPage) => {
        const url = new URL(lastPage.next ?? '');
        const offset = url.searchParams.get('offset');
        return offset;
      },
    });

  const { data: pkmnData } = useQuery({
    queryKey: ['pokemon', selectedName],
    queryFn: fetchPokemonByName,
    enabled: !!selectedName,
  });

  console.log({ pkmnData });

  const list =
    data?.pages.reduce((acum, cur) => acum.concat(cur.results as []), []) ?? [];

  const value: PokemonContextValue = {
    list,
    data,
    selected,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    setSelected,
    selectedName,
    setSelectedName,
  };

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
