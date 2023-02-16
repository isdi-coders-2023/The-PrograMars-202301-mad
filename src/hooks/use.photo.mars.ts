import { useState, useCallback } from 'react';
import { MarsPhotoStructure } from '../models/marsPhoto';
import { NasaApiRepo } from '../services/repository/nasa.api.repo';

export type UseMarsStructure = ReturnType<typeof usePhotos>;
export function usePhotos(repo: NasaApiRepo) {
  const initialState: MarsPhotoStructure[] = [];

  const [photos, setPhotos] = useState(initialState);

  console.log('PHOTOS: ', photos);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPhotos = useCallback(async () => {
    try {
      const photos = await repo.loadPhotos();
      setPhotos(photos);
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  return {
    photos,
    loadPhotos,
  };
}
