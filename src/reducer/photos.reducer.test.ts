import { photosReducer } from './photos.reducer';
import { photosCreator } from './photos.actions';
import { mockState } from '../mocks/tests.mocks';

describe('Given the photosReducer fuction', () => {
  const mockloadPhotosCreator = {
    type: photosCreator.load,
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
  const mockloadPhotosCreator3 = {
    type: photosCreator.actualCard,
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
  const mockloadPhotosCreator4 = {
    type: photosCreator.createPhoto,
    payload: [
      {
        id: 2,
        sol: 'test',
        camera_id: 'test',
        camera_name: 5,
        camera_rover_id: 8,
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
  const mockloadPhotosCreator5 = {
    type: photosCreator.loadPrivate,
    payload: [
      {
        id: 2,
        sol: 'test',
        camera_id: 'test',
        camera_name: 5,
        camera_rover_id: 8,
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

  describe('When the action is not a switch case', () => {
    test('Then it should returned the initial state', async () => {
      const photo = photosReducer(mockState, mockloadPhotosCreator2);
      expect(photo).toEqual(mockState);
    });
  });

  describe('When the action is load', () => {
    test('Then it should return the state updating the photos property', async () => {
      const photo = photosReducer(mockState, mockloadPhotosCreator);
      expect(photo).toEqual({
        ...mockState,
        photos: mockloadPhotosCreator.payload,
      });
    });
  });

  describe('When the action is actualCard', () => {
    test('Then it should return the state updating the actualPhoto property', async () => {
      const photo = photosReducer(mockState, mockloadPhotosCreator3);
      expect(photo).toEqual({
        ...mockState,
        actualPhoto: mockloadPhotosCreator.payload,
      });
    });
  });

  describe('When the action is createPhoto', () => {
    test('Then it should return the state updating the privatePhotos property', async () => {
      const photo = photosReducer(mockState, mockloadPhotosCreator4);
      const element = [
        ...mockState.privatePhotos,
        mockloadPhotosCreator4.payload,
      ];
      expect(photo).toEqual({
        ...mockState,
        privatePhotos: element,
      });
    });
  });

  describe('When the action is loadPrivate', () => {
    test('Then it should return the state updating the privatePhotos property', async () => {
      const photo = photosReducer(mockState, mockloadPhotosCreator5);
      const element = [...mockloadPhotosCreator5.payload];
      expect(photo).toEqual({
        ...mockState,
        privatePhotos: element,
      });
    });
  });
});
