import clsx from 'clsx';
import { usePokemon } from '../../context/Pokemon';
import { GRADIENT_VARIANTS } from './constants';
import TypeSvg from '../TypeSvg';
import { PkmnNumberFormat } from '../../helpers/formatters';
import TypeChip from '../TypeChip';
import AbilitySvg from '../../assets/information-icons/ability.svg';
import HeightSvg from '../../assets/information-icons/height.svg';
import WeightSvg from '../../assets/information-icons/weight.svg';
import SpeciesSvg from '../../assets/information-icons/species.svg';
import StatChip from '../StatChip';
import Spinner from '../Spinner';

const DetailPage = () => {
  const { selected, isLoadingDetails } = usePokemon();

  if (!selected) {
    return null;
  }

  const {
    types,
    image: pkmnSprite,
    name,
    id,
    weight,
    ability,
    species,
    height,
  } = selected;

  const [mainType, secondaryType] = types;

  const headerClassName = clsx(
    'relative h-[307px] bg-gradient-to-br',
    `${GRADIENT_VARIANTS[mainType]}`
  );

  const formattedPkmnNo = PkmnNumberFormat.format(id);

  return (
    <section className="relative h-full">
      {isLoadingDetails && <Spinner />}
      <header className={headerClassName}>
        <TypeSvg
          type={mainType}
          className="absolute left-[-70px] top-[-70px]"
        />
        <img
          className="w-[288px] h-auto relative left-[71px] top-[84px] aspect-square"
          style={{ imageRendering: 'pixelated' }}
          src={pkmnSprite}
          aria-label={`${name} sprite`}
          alt={`${name} sprite`}
        />
      </header>
      <div className="px-6 py-[15px] flex flex-col gap-5">
        <div>
          <h1 className="capitalize font-anonymous text-2xl">{name}</h1>
          <p className="font-inter opacity-70 text-sm">{`#${formattedPkmnNo}`}</p>
        </div>
        <div className="flex gap-[7px]">
          <TypeChip type={mainType} />
          <TypeChip type={secondaryType} />
        </div>
        <div className="flex flex-wrap gap-5">
          <StatChip name="weight" iconSrc={WeightSvg} value={weight} />
          <StatChip name="height" iconSrc={HeightSvg} value={height} />
          <StatChip name="species" iconSrc={SpeciesSvg} value={species} />
          <StatChip name="ability" iconSrc={AbilitySvg} value={ability} />
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
