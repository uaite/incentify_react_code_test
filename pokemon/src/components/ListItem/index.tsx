import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({
  data,
  text,
  textProp,
  onClick,
}) => {
  const textPropContent = Reflect.get(data ?? {}, textProp ?? '');
  const actualText: string =
    (typeof textPropContent === 'string' ? textPropContent : text) ?? '';

  return (
    <button
      onClick={() => onClick?.(actualText)}
      className="min-h-[30px] bg-silver rounded border-black border text-start px-2 shadow-list-item hover:opacity-80"
    >
      <p className="capitalize font-anonymous text-xs">
        {typeof actualText === 'string' ? actualText : ''}
      </p>
    </button>
  );
};

export default ListItem;
