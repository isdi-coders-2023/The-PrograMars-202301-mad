import { useMemo } from 'react';
import { usePhotos } from '';
import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { AppContext } from './app.context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const photosRepo = useMemo(() => new NasaApiRepo(), []);

  const context = {
    ...usePhotos(photosRepo),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
