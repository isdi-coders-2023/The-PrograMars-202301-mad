import { createContext } from 'react';
import { UseMarsStructure } from '../hooks/use.photo.mars';

export const AppContext = createContext({ photos: MarsPhotoStructure[] } as UseMarsStructure);
