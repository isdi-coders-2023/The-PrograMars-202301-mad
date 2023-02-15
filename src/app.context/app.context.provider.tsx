import { useMemo } from 'react';
import { usePhotos } from '../hooks/use.photo.mars';
import { PhotosApiRepo } from '../services/repository/nasa.api.repo';
import { AppContext } from './app.context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const photosRepo = useMemo(() => new PhotosApiRepo(), []);

  const context = {
    ...usePhotos(photosRepo),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
