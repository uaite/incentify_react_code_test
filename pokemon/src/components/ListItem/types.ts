import { NamedAPIResource } from 'pokenode-ts';

export type ListItemProps = {
  data?: NamedAPIResource;
  text?: string;
  textProp?: string;
  onClick?: (name: string) => void;
};
