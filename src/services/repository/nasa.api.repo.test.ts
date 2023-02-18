import { NasaApiRepo } from './nasa.api.repo';

describe('Given the service Api repo class', () => {
  describe('When create a new object of the class', () => {
    test('Then it should be able to call its method', async () => {
      const mockPhotoStructure = [
        {
          id: 1099081,
          sol: 3738,
          camera_id: 22,
          camera_name: 'MAST',
          camera_rover_id: 5,
          camera_full_name: 'Mast Camera',
          img_src:
            'https://mars.nasa.gov/msl-raw-images/msss/03738/mcam/3738ML1035570241306133C00_DXXX.jpg',
          earth_date: '2023-02-10',
          rover_id: 5,
          rover_name: 'Curiosity',
          rover_landing_date: '2012-08-06',
          rover_launch_date: '2011-11-26',
          rover_status: 'active',
          apiOrigin: 'APIPublic',
          isFavorite: false,
          favoriteName: '',
        },
      ];
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          photos: [
            {
              id: 1099081,
              sol: 3738,
              camera: {
                id: 22,
                name: 'MAST',
                rover_id: 5,
                full_name: 'Mast Camera',
              },
              img_src:
                'https://mars.nasa.gov/msl-raw-images/msss/03738/mcam/3738ML1035570241306133C00_DXXX.jpg',
              earth_date: '2023-02-10',
              rover: {
                id: 5,
                name: 'Curiosity',
                landing_date: '2012-08-06',
                launch_date: '2011-11-26',
                status: 'active',
              },
            },
          ],
        }),
      });
      const repo = new NasaApiRepo();
      expect(repo).toBeInstanceOf(NasaApiRepo);
      const load = await repo.loadPhotos();
      expect(load).toEqual(mockPhotoStructure);
    });
  });
});
