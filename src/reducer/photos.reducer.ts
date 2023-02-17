import { MarsPhotoStructure } from '../models/marsPhoto';
import { rootObject } from './photos.actions';
import { Action } from './photos.actions.creator';

export function photosReducer(
  state: MarsPhotoStructure[],
  action: Action
): MarsPhotoStructure[] {
  if (action.type) {
    rootObject.load:
      return action.payload as MarsPhotoStructure[];


  }
}
