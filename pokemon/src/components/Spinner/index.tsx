import clsx from 'clsx';
import pokeball from '@assets/pokeball.svg';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({ className: propsClassName }) => {
  const className = clsx(
    'w-12 h-12 animate-spin relative top-[calc(50%-24px)] left-[calc(50%-24px)]',
    propsClassName
  );

  return (
    <div className="w-full h-full bg-black/15 absolute z-10 animate-show">
      <img {...{ className }} src={pokeball} />
    </div>
  );
};

export default Spinner;
