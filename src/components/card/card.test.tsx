import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Given the Card component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Card info={mockPhoto}></Card>);
  });
  describe('When called', () => {
    test('Then it should renderize a card component', () => {
      const element = screen.getByRole('img');
      const element2 = screen.getByText(/FHAZ/i);
      expect(element).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
    });
  });

  describe('When clicked on it', () => {
    test('Then it should call handleClick', () => {
      const element = screen.getByRole('img');
      userEvent.click(element);
      expect(console.log).toHaveBeenCalled();
    });
  });
});
