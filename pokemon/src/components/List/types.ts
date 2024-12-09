export type ListEntry = {
  id: string;
  text?: string;
  textProp?: string;
};

export type ListProps = {
  items?: Array<ListEntry>;
  className?: string;
  onItemClick?: (item: ListEntry) => void;
};
