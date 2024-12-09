import { getImageConfigFromType } from '../../helpers';
import { usePokemon } from '../../context/Pokemon';
import List from '../List';
// import AbilitySvg from '../../assets/information-icons/ability.svg';
// import HeightSvg from '../../assets/information-icons/height.svg';
// import WeightSvg from '../../assets/information-icons/weight.svg';
// import SpeciesSvg from '../../assets/information-icons/species.svg';

function App() {
  const { selected: selectedPkmn } = usePokemon();
  const pkmnFirstType =
    !!selectedPkmn && (selectedPkmn.types.length ?? 0) > 0
      ? selectedPkmn.types[0]
      : 'normal';

  const { color, vectorSrc } = getImageConfigFromType(pkmnFirstType);

  return (
    <>
      <div className="w-full">
        <div className="w-1/3">
          <List items={[]} />
        </div>
        <div className="w-2/3">
          {selectedPkmn ? (
            <div>
              <div>
                <div style={{ backgroundColor: color }}></div>
                <img src={vectorSrc} />
                <div className="w-[150px] h-[150px]">{selectedPkmn?.name}</div>
              </div>
              <div>
                {selectedPkmn?.types.map((type) => {
                  const typeImageConfig = getImageConfigFromType(type);

                  return (
                    <div key={type}>
                      <img src={typeImageConfig.pngSrc} />
                    </div>
                  );
                })}
              </div>
              <div>
                <div>Weight</div>
                <div>{selectedPkmn.weight} kg</div>
              </div>
              <div>
                <div>Height</div>
                <div>{selectedPkmn.height} m</div>
              </div>
              <div>
                <div>Species</div>
                <div>{selectedPkmn.species}</div>
              </div>
              <div>
                <div>Ability</div>
                <div>{selectedPkmn.ability}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
