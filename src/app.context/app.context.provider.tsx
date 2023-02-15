import { usePhotos } from '../hooks/use.photo.mars';
// import { NasaApiRepo } from "../services/"; Iván
import { AppContext } from './app.context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const repo = new NasaApiRepo();
  const context = usePhotos(repo);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
