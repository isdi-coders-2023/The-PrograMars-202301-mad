import { photosReducer } from './photos.reducer';
import { rootObject } from './photos.actions';
import { InitialStateStructure } from '../hooks/use.photo.mars';

describe('Given the photosReducer fuction', () => {
  const mockPhotos = {
    photos: [],
    actualPhoto: [],
  } as InitialStateStructure;

  const mockloadPhotosCreator = {
    type: rootObject.load,
    payload: [
      {
        id: 1,
        sol: 'test',
        camera_id: 'test',
        camera_name: 4,
        camera_rover_id: 6,
        camera_full_name: 'test',
        img_src: 'test',
        earth_date: 'test',
        rover_id: 'test',
        rover_name: 'test',
        rover_landing_date: 'test',
        rover_launch_date: 'test',
        rover_status: 'test',
      },
    ],
  };
  const mockloadPhotosCreator2 = {
    type: '',
    payload: [
      {
        id: 1,
        sol: 'test',
        camera_id: 'test',
        camera_name: 4,
        camera_rover_id: 6,
        camera_full_name: 'test',
        img_src: 'test',
        earth_date: 'test',
        rover_id: 'test',
        rover_name: 'test',
        rover_landing_date: 'test',
        rover_launch_date: 'test',
        rover_status: 'test',
      },
    ],
  };

  describe('When the action is not load', () => {
    test('Then it should returned the initial state', async () => {
      const photo = photosReducer(mockPhotos, mockloadPhotosCreator2);
      expect(photo).toEqual(mockPhotos);
    });
  });

  describe('When the action is load', () => {
    test('Then it should returned the state', async () => {
      const photo = photosReducer(mockPhotos, mockloadPhotosCreator);
      expect(photo).toEqual({
        ...mockPhotos,
        photos: mockloadPhotosCreator.payload,
      });
    });
  });
});
