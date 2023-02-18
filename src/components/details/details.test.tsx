import { render, screen } from '@testing-library/react';
import { PhotosContext } from '../../app.context/app.context';
import { UseMarsStructure } from '../../hooks/use.photo.mars';

import { Details } from './details';

describe('Given the details component', () => {
  describe('When it is called', () => {
    test('Then it should the component card details', () => {
      const mockPhotos = {
        photos: [],
        actualPhoto: {
          id: 1,
          sol: 1,
          camera_id: 1,
          camera_name: '',
          camera_rover_id: 1,
          camera_full_name: '',
          img_src:
            'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
          earth_date: '',
          rover_id: 1,
          rover_name: '',
          rover_landing_date: '',
          rover_launch_date: '',
          rover_status: '',
          apiOrigin: '',
          isFavorite: false,
          favoriteName: '',
        },
      } as unknown as UseMarsStructure;

      render(
        <PhotosContext.Provider value={mockPhotos}>
          <Details></Details>
        </PhotosContext.Provider>
      );
      const element = screen.getByText(/camera/i);
      expect(element).toBeInTheDocument();
    });
  });
});
