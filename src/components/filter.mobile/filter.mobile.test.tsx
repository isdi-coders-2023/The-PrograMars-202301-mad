/* eslint-disable testing-library/no-render-in-setup */
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PhotosContext } from '../../app.context/app.context';
import { InitialStateStructure } from '../../hooks/use.photo.mars';
import { FilterMobile } from './filter.mobile';

const mockState = {
  photos: [],
  actualPhoto: {
    id: 1,
    sol: 1,
    camera_id: 1,
    camera_name: 'test',
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
  privatePhotos: [],
} as InitialStateStructure;

const mockContext = {
  state: mockState,
  loadPhotos: jest.fn(),
  actualCard: jest.fn(),
  loadPrivatePhotos: jest.fn(),
  createPhoto: jest.fn(),
};

describe('Given the component filter', () => {
  beforeEach(() => {
    render(
      <PhotosContext.Provider value={mockContext}>
        <FilterMobile></FilterMobile>
      </PhotosContext.Provider>
    );
  });

  describe('When it is render', () => {
    test('Then it should print in the screen the radio buttons', () => {
      const selectElement = screen.getByRole('combobox');
      const titleElement = screen.getByText(/camera/i);

      expect(selectElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });

    describe('When select a filter option', () => {
      test('Then it should call the context load method', () => {
        const element = screen.getByText(/camera/i);
        expect(element).toBeInTheDocument();
        const select = screen.getByTestId('select');

        userEvent.selectOptions(select, 'mast');
        expect(mockContext.loadPhotos).toHaveBeenCalled();
      });
    });
  });
});
