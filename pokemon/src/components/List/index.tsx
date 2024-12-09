import clsx from 'clsx';
import ListItem from '../ListItem';
import { ListProps } from './types';

const List: React.FC<ListProps> = ({
  items,
  className: paramClassName,
  onItemClick,
}) => {
  if (!items) return 'Empty';

  const className = clsx(
    paramClassName,
    'flex flex-col overflow-auto p-[15px] gap-2.5'
  );

  return (
    <ul {...{ className }}>
      {items.map((item) => (
        <ListItem
          {...item}
          key={item.id}
          textProp="name"
          data={item}
          onClick={(item) => {
            onItemClick?.(item);
          }}
        />
      ))}
    </ul>
  );
};

export default List;
