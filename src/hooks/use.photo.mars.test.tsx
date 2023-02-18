import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { usePhotos } from './use.photo.mars';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { PrivateApiRepo } from '../services/repository/private.api.repo';

describe('Given a mocked repo show in a mocked html', () => {
  let element: HTMLElement;
  let mockRepo: NasaApiRepo;
  let mockRepo2: PrivateApiRepo;
  beforeEach(() => {
    const TestRepo = function () {
      const { loadPhotos } = usePhotos({
        publicRepo: mockRepo,
        privateRepo: mockRepo2,
      });

      return (
        <>
          <button onClick={() => loadPhotos()}>Load</button>
        </>
      );
    };

    mockRepo = { loadPhotos: jest.fn() } as unknown as NasaApiRepo;
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestRepo />);
  });

  describe('When user click the button', () => {
    test('Then the load method is called', () => {
      element = screen.getByRole('button');
      userEvent.click(element);
      expect(mockRepo.loadPhotos).toHaveBeenCalled();
    });
  });
});
