import { photosCreator } from './photos.actions';
import {
  loadPhotosCreator,
  actualCardCreator,
  loadPrivatePhotosCreator,
  createPhotoCreator,
} from './photos.actions.creator';

const mockPhotoStructure = [
  {
    id: 1,
    sol: 1,
    camera_id: 3,
    camera_name: 'test',
    camera_rover_id: 6,
    camera_full_name: 'test',
    img_src: 'test',
    earth_date: 'test',
    rover_id: 1,
    rover_name: 'test',
    rover_landing_date: 'test',
    rover_launch_date: 'test',
    rover_status: 'test',
    apiOrigin: 'APIPublic',
    isFavorite: false,
    favoriteName: 'test',
  },
];

describe('Given the photos actions creator', () => {
  describe('When called the function load', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = loadPhotosCreator(mockPhotoStructure);
      const result = { type: photosCreator.load, payload: mockPhotoStructure };
      expect(element).toEqual(result);
    });
  });

  describe('When called the function actualCard', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = actualCardCreator(mockPhotoStructure[0]);
      const result = {
        type: photosCreator.actualCard,
        payload: mockPhotoStructure[0],
      };
      expect(element).toEqual(result);
    });
  });

  describe('When called the function loadPrivatePhotos', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = loadPrivatePhotosCreator(mockPhotoStructure);
      const result = {
        type: photosCreator.loadPrivate,
        payload: mockPhotoStructure,
      };
      expect(element).toEqual(result);
    });
  });

  describe('When called the function createPhoto', () => {
    test('Then it should return an object with the proper type and payload', () => {
      const element = createPhotoCreator(mockPhotoStructure[0]);
      const result = {
        type: photosCreator.createPhoto,
        payload: mockPhotoStructure[0],
      };
      expect(element).toEqual(result);
    });
  });
});
