import { useState, useCallback, useEffect, useReducer } from 'react';
import { RootObject } from '../models/api.model';
import { MarsPhotoStructure } from '../models/marsPhoto';
import { photosReducer } from '../reducer/photos.reducer';
import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import * as ac from '../reducer/photos.actions.creator';

export type UseMarsStructure = ReturnType<typeof usePhotos>;
export function useMemo(repo: NasaApiRepo) {
  const initialState: RootObject = {
    photos: [],
  };

  const [photos, dispatch] = useReducer(photosReducer, initialState);

  console.log('PHOTOS: ', photos);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPhotos = useCallback(async () => {
    try {
      const photos = await repo.loadPhotos();
      dispatch(ac.loadPhotosCreate(photos));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  return {
    photos,
    loadPhotos,
  };
}
