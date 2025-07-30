import DetailPage from '@components/DetailPage';
import List from '@components/List';
import { usePokemon } from '@contexts/Pokemon';
import { useEffect } from 'react';

function App() {
  const { list, fetchNextPage, setSelectedName } = usePokemon();

  useEffect(() => {
    setTimeout(() => {
      fetchNextPage?.();
    }, 2000);
    setTimeout(() => {
      fetchNextPage?.();
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full h-full max-h-full flex gap-6">
        <List
          items={list}
          onItemClick={(name) => {
            setSelectedName(name);
          }}
          className="min-w-[220px] max-w-[220px] bg-white"
        />
        <div className="w-full bg-white">
          <DetailPage />
        </div>
      </div>
    </>
  );
}

export default App;
