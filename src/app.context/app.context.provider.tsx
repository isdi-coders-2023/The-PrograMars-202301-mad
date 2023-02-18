import { useMemo } from 'react';
import { usePhotos } from '../hooks/use.photo.mars';

import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { PrivateApiRepo } from '../services/repository/private.api.repo';
import { AppContext } from './app.context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const photosNasaRepo = useMemo(() => new NasaApiRepo(), []);
  const photosPrivateRepo = useMemo(() => new PrivateApiRepo(), []);
  const hookRepos = {
    publicRepo: photosNasaRepo,
    privateRepo: photosPrivateRepo,
  };

  const context = usePhotos(hookRepos);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
