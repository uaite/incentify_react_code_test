import { NamedAPIResource } from 'pokenode-ts';
import { AppPkmnDetail } from '../../helpers';
import { UseInfiniteQueryResult } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export type PokemonContextProps = {
  list?: [];
  children: React.ReactNode;
};

export type PokemonContextValue = {
  list?: NamedAPIResource[];
  selected?: AppPkmnDetail;
  setSelected: Dispatch<SetStateAction<AppPkmnDetail | undefined>>;
  selectedName?: string;
  setSelectedName: Dispatch<SetStateAction<string>>;
} & Partial<UseInfiniteQueryResult>;
