import { NamedAPIResource, PokemonClient } from 'pokenode-ts';
import { AppPkmnDetail } from '../../helpers';

export type PokemonContextProps = {
  list?: [];
  children: React.ReactNode;
};

export type PokemonContextValue = {
  list?: NamedAPIResource[];
  selected?: AppPkmnDetail;
  api: PokemonClient;
  loading: boolean;
};
