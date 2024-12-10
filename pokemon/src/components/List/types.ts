import { NamedAPIResource } from 'pokenode-ts';

export type ListEntry = {
  id: string;
  text?: string;
  textProp?: string;
};

export type ListProps = {
  items?: NamedAPIResource[];
  className?: string;
  onItemClick?: (name: string) => void;
};
