import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { PhotosContext } from '../../app.context/app.context';
import { InitialStateStructure } from '../../hooks/use.photo.mars';
import { Card } from './card';

const mockPhoto = {
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
};

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

describe('Given the Card component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Router>
        <PhotosContext.Provider value={mockContext}>
          <Card info={mockPhoto}></Card>
        </PhotosContext.Provider>
      </Router>
    );
  });
  describe('When called', () => {
    test('Then it should renderize a card component', () => {
      const element = screen.getByRole('img');
      const element2 = screen.getByText(/test/i);
      expect(element).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
    });
  });

  describe('When clicked on it', () => {
    test('Then it should call handleClick', () => {
      const element = screen.getByRole('img');
      userEvent.click(element);
      expect(mockContext.actualCard).toHaveBeenCalled();
      // Test incompleto, pendiente de testear si el click lleva al nuevo Path
    });
  });
});
