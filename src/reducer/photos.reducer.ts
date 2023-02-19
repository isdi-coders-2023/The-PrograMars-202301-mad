import { InitialStateStructure } from '../hooks/use.photo.mars';
import { photosCreator } from './photos.actions';
import { Action } from './photos.actions.creator';

export function photosReducer(
  state: InitialStateStructure,
  action: Action
): InitialStateStructure {
  switch (action.type) {
    case photosCreator.load:
      return { ...state, photos: action.payload };

    case photosCreator.actualCard:
      return { ...state, actualPhoto: action.payload };

    case photosCreator.actualPage:
      return { ...state, actualPage: action.payload };

    default:
      return state;
  }
}
