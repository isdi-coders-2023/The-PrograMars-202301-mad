/* eslint-disable testing-library/no-render-in-setup */
import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { usePhotos } from './use.photo.mars';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { PrivateApiRepo } from '../services/repository/private.api.repo';

describe('Given a mocked repo show in a mocked html', () => {
  let element: HTMLElement[];
  let mockRepo: NasaApiRepo;
  let mockRepo2: PrivateApiRepo;

  beforeEach(() => {
    const TestRepo = function () {
      const { state, loadPhotos, actualCard } = usePhotos({
        publicRepo: mockRepo,
        privateRepo: mockRepo2,
      });

      return (
        <>
          <button onClick={() => loadPhotos()}>Load</button>
          <button
            onClick={() =>
              actualCard({
                id: 1,
                sol: 1,
                camera_id: 1,
                camera_name: 'test ok',
                camera_rover_id: 1,
                camera_full_name: '',
                img_src: '',
                earth_date: '',
                rover_id: 1,
                rover_name: '',
                rover_landing_date: '',
                rover_launch_date: '',
                rover_status: '',
                apiOrigin: '',
                isFavorite: false,
                favoriteName: 'Renderized',
              })
            }
          >
            {JSON.stringify(state.actualPhoto)}
          </button>
        </>
      );
    };

    mockRepo = { loadPhotos: jest.fn() } as unknown as NasaApiRepo;
    render(<TestRepo />);
  });

  describe('When user click the first button', () => {
    test('Then the load method is called', () => {
      element = screen.getAllByRole('button');
      userEvent.click(element[0]);
      expect(mockRepo.loadPhotos).toHaveBeenCalled();
    });
  });

  describe('When user click the second button', () => {
    test('Then the actualCard method is called', () => {
      element = screen.getAllByRole('button');
      const element2 = screen.getByText(/no actual card/i);
      expect(element2).toBeInTheDocument();
      userEvent.click(element[1]);
      const element3 = screen.getByText(/test ok/i);

      expect(element3).toBeInTheDocument();
    });
  });
});
