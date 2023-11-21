'use client';

import { useAppSelector } from '@/redux/store';
import ConfigItem from './[id]';
import MainContainer from '../components/mainContainer';

function Storage() {
  const config = useAppSelector((store) => store.addToStore);

  return (
    <MainContainer>
      <div className="flex min-h-screen items-center flex-start flex-col p-24 toolCard">
        <h1>Выбранные конфигурации</h1>
        <div className="flex min-h-screen items-center flex-start flex-wrap gap-20">
          {config?.map((item) => (
            <ConfigItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default Storage;
