import { useMemo } from 'react';
import { usePhotos } from '../hooks/use.photo.mars';

import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { PrivateApiRepo } from '../services/repository/private.api.repo';
import { PhotosContext } from './app.context';

export function PhotosContextProvider({ children }: { children: JSX.Element }) {
  const photosNasaRepo = useMemo(() => new NasaApiRepo(), []);
  const photosPrivateRepo = useMemo(() => new PrivateApiRepo(), []);
  const hookRepos = useMemo(
    () => ({
      publicRepo: photosNasaRepo,
      privateRepo: photosPrivateRepo,
    }),
    [photosNasaRepo, photosPrivateRepo]
  );

  const context = usePhotos(hookRepos);

  return (
    <PhotosContext.Provider value={context}>{children}</PhotosContext.Provider>
  );
}
