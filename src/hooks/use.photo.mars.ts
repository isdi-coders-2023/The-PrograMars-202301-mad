import { useCallback, useReducer, useEffect } from 'react';
import { photosReducer } from '../reducer/photos.reducer';
import { NasaApiRepo } from '../services/repository/nasa.api.repo';

import { loadPhotosCreator } from '../reducer/photos.actions.creator';
import { PrivateApiRepo } from '../services/repository/private.api.repo';

export type UseMarsStructure = ReturnType<typeof usePhotos>;

type CustomHookStructure = [NasaApiRepo, PrivateApiRepo];

export type InitialStateStructure = {
  photos: [];
  actualPhoto: [];
};

export function usePhotos(repo: CustomHookStructure) {
  const initialState: InitialStateStructure = {
    photos: [],
    actualPhoto: [],
  };
  const [photos, dispatch] = useReducer(photosReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPhotos = useCallback(async () => {
    try {
      const photos = await repo[0].loadPhotos();
      dispatch(loadPhotosCreator(photos));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  return {
    photos,
    loadPhotos,
  };
}
