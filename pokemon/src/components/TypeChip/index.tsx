import { TypeChipProps } from './types';

import bug from '../../assets/png-icons/bug.png';
import dark from '../../assets/png-icons/dark.png';
import dragon from '../../assets/png-icons/dragon.png';
import electric from '../../assets/png-icons/electric.png';
import fairy from '../../assets/png-icons/fairy.png';
import fighting from '../../assets/png-icons/fighting.png';
import fire from '../../assets/png-icons/fire.png';
import flying from '../../assets/png-icons/flying.png';
import ghost from '../../assets/png-icons/ghost.png';
import grass from '../../assets/png-icons/grass.png';
import ground from '../../assets/png-icons/ground.png';
import ice from '../../assets/png-icons/ice.png';
import normal from '../../assets/png-icons/normal.png';
import poison from '../../assets/png-icons/poison.png';
import psychic from '../../assets/png-icons/psychic.png';
import rock from '../../assets/png-icons/rock.png';
import steel from '../../assets/png-icons/steel.png';
import water from '../../assets/png-icons/water.png';
import clsx from 'clsx';
import { COLOR_VARIANTS } from './contants';

const TypeChip: React.FC<TypeChipProps> = ({ type }) => {
  const srcMap: Record<string, string> = {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
  };

  const src = srcMap[type];
  const wrapperClassName = clsx(
    'flex items-center rounded-[67px] w-fit pr-2 h-[26px]',
    COLOR_VARIANTS[type]
  );

  return (
    <span className={wrapperClassName}>
      <img {...{ src }} className="mr-2 h-[24px]" />
      <p className="font-anonymous font-bold text-xs capitalize">{type}</p>
    </span>
  );
};

export default TypeChip;
