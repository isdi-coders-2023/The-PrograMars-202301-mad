import { MarsPhotoStructure } from '../models/marsPhoto';
import { RootObject } from './photos.actions';

interface Action {
  type: string;
  payload?: any;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface RootObject extends Action {
  payload: MarsPhotoStructure | MarsPhotoStructure[] | MarsPhotoStructure['id'];
}

export const loadPhotosCreator = (
  payload: MarsPhotoStructure[]
): RootObject => {
  return {
    type: RootObject.load,
    payload,
  };
};
