import { StatChipProps } from './types';

const StatChip: React.FC<StatChipProps> = ({ name, iconSrc, value }) => {
  return (
    <div className="flex flex-col gap-1 w-[154px]">
      <span className="inline-flex gap-1.5">
        <img src={iconSrc} alt={name} aria-label={name} />
        <p className="font-helvetica text-xs opacity-60 uppercase">{name}</p>
      </span>
      <span className="rounded-[15px] border border-black border-opacity-10 font-anonymous text-center capitalize">
        {value}
      </span>
    </div>
  );
};

export default StatChip;
