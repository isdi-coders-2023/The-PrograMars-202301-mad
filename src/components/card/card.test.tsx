import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { PhotosContext } from '../../app.context/app.context';
import { mockContext } from '../../mocks/tests.mocks';
import { Card } from './card';

const mockPhoto = {
  id: 1,
  sol: 5,
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

const mockPhotoTrue = {
  id: 2,
  sol: 11,
  camera_id: 31,
  camera_name: 'foo',
  camera_rover_id: 6,
  camera_full_name: 'var',
  img_src: 'test',
  earth_date: 'test',
  rover_id: 1,
  rover_name: 'foo',
  rover_landing_date: 'test',
  rover_launch_date: 'test',
  rover_status: 'foo',
  apiOrigin: 'APIPublic',
  isFavorite: true,
  favoriteName: 'test',
};

describe('Given the Card component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Router>
        <PhotosContext.Provider value={mockContext}>
          <Card info={mockPhoto}></Card>
          <Card info={mockPhotoTrue}></Card>
        </PhotosContext.Provider>
      </Router>
    );
  });
  describe('When called', () => {
    test('Then it should renderize a card component', () => {
      const element = screen.getAllByRole('img');
      const element2 = screen.getAllByText(/test/i);
      expect(element[0]).toBeInTheDocument();
      expect(element2[0]).toBeInTheDocument();
    });
  });

  describe('When clicked on it', () => {
    test('Then it should call handleClick', () => {
      const element = screen.getAllByRole('img');
      userEvent.click(element[0]);
    });
  });
  describe('When clicked on the star icon', () => {
    test('Then it should change isFavorite status', () => {
      const element = screen.getAllByRole('button');
      userEvent.click(element[0]);
      expect(mockPhoto.isFavorite).toBe(true);
    });
  });
  describe('When clicked on the star', () => {
    test('Then it should change isFavorite status', () => {
      const element = screen.getAllByRole('button');
      userEvent.click(element[1]);
      expect(mockPhotoTrue.isFavorite).toBe(false);
    });
  });
});
