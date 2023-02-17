import { useCallback, useReducer, useEffect } from 'react';
import { photosReducer } from '../reducer/photos.reducer';
import { NasaApiRepo } from '../services/repository/nasa.api.repo';

import { loadPhotosCreator } from '../reducer/photos.actions.creator';
import { MarsPhotoStructure } from '../models/marsPhoto';

export type UseMarsStructure = ReturnType<typeof usePhotos>;

export function usePhotos(repo: NasaApiRepo) {
  const initialState: MarsPhotoStructure[] = [];
  const [photos, dispatch] = useReducer(photosReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPhotos = useCallback(async () => {
    try {
      const photos = await repo.loadPhotos();
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
