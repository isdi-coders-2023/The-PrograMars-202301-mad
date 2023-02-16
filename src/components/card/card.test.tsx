import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Photo } from '../../models/api.model';
import { Card } from './card';

const mockPhoto: Photo = {
  id: 102693,
  sol: 1000,
  camera: {
    id: 20,
    name: 'FHAZ',
    rover_id: 5,
    full_name: 'Front Hazard Avoidance Camera',
  },
  img_src:
    'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
  earth_date: '2015-05-30',
  rover: {
    id: 5,
    name: 'Curiosity',
    landing_date: '2012-08-06',
    launch_date: '2011-11-26',
    status: 'active',
  },
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
