import { InitialStateStructure } from '../hooks/use.photo.mars';
import { MarsPhotoStructure } from '../models/marsPhoto';
import { rootObject } from './photos.actions';
import { Action } from './photos.actions.creator';

export function photosReducer(
  state: InitialStateStructure,
  action: Action
): InitialStateStructure {
  switch (action.type) {
    case rootObject.load:
      return { ...state, photos: action.payload } as InitialStateStructure;

    default:
      return state;
  }
}
