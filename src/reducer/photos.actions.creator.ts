import { MarsPhotoStructure } from '../models/marsPhoto';
import { photosCreator } from './photos.actions';

export interface Action {
  type: string;
  payload?: any;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface RootObject extends Action {
  payload: MarsPhotoStructure | MarsPhotoStructure[] | MarsPhotoStructure['id'];
}

export const loadPhotosCreator = (payload: MarsPhotoStructure[]): Action => {
  return {
    type: photosCreator.load,
    payload,
  };
};

export const actualCardCreator = (payload: MarsPhotoStructure): Action => {
  return {
    type: photosCreator.actualCard,
    payload,
  };
};
