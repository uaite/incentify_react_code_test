import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({ data, text, textProp }) => {
  const actualText = text ?? data?.[textProp ?? ''];

  console.log({ data, text, textProp });

  return (
    <button className="min-h-[30px] bg-silver rounded border-black border text-start px-2 shadow-list-item">
      <p className="capitalize font-anonymous text-xs">
        {typeof actualText === 'string' ? actualText : ''}
      </p>
    </button>
  );
};

export default ListItem;
