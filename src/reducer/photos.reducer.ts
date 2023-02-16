import { MarsPhotoStructure } from '../models/marsPhoto';
import { rootObject } from './photos.actions';
import { RootObject } from './photos.actions.creator';

export function photosReducer(
  state: MarsPhotoStructure[],
  action: RootObject
): MarsPhotoStructure[] {
  switch (action.type) {
    case rootObject.load:
      return action.payload as MarsPhotoStructure[];

    default:
      return state;
  }
}
