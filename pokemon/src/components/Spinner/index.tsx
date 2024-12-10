import clsx from 'clsx';
import pokeball from '../../assets/pokeball.svg';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({ className: propsClassName }) => {
  const className = clsx('w-12 h-12 animate-spin relative', propsClassName);
  return <img {...{ className }} src={pokeball} />;
};

export default Spinner;
