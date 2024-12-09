import { ListEntry } from '../List/types';

export type ListItemProps = {
  data?: Record<string, unknown>;
  text?: string;
  textProp?: string;
  onClick?: (item: ListEntry) => void;
};
