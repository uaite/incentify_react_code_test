import clsx from 'clsx';
import { ListProps } from './types';
import ListItem from '@components/ListItem';

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
          key={item.name}
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
