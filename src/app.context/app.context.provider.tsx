import { usePhotos } from '../hooks/use.photo.mars';
import { PhotosApiRepo } from '../services/repository/nasa.api.repo';
import { AppContext } from './app.context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const repo = new PhotosApiRepo();
  const context = usePhotos(repo);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
