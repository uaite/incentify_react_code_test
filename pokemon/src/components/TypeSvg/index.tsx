/// <reference types="vite-plugin-svgr/client" />
import { TypeSvgProps } from './types';

import bug from '../../assets/vector/bug.svg?react';
import dark from '../../assets/vector/dark.svg?react';
import dragon from '../../assets/vector/dragon.svg?react';
import electric from '../../assets/vector/electric.svg?react';
import fairy from '../../assets/vector/fairy.svg?react';
import fighting from '../../assets/vector/fighting.svg?react';
import fire from '../../assets/vector/fire.svg?react';
import flying from '../../assets/vector/flying.svg?react';
import ghost from '../../assets/vector/ghost.svg?react';
import grass from '../../assets/vector/grass.svg?react';
import ground from '../../assets/vector/ground.svg?react';
import ice from '../../assets/vector/ice.svg?react';
import normal from '../../assets/vector/normal.svg?react';
import poison from '../../assets/vector/poison.svg?react';
import psychic from '../../assets/vector/psychic.svg?react';
import rock from '../../assets/vector/rock.svg?react';
import steel from '../../assets/vector/steel.svg?react';
import water from '../../assets/vector/water.svg?react';

const TypeSvg: React.FC<TypeSvgProps> = ({ type, className }) => {
  const SvgComponents: Record<string, React.FunctionComponent> = {
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

  const Component = SvgComponents[type];

  return (
    <div {...{ className }}>
      <Component className="w-[330px] h-[330px]" />
    </div>
  );
};

export default TypeSvg;
