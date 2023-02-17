import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { usePhotos } from './use.photo.mars';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';

describe('Given a mocked repo show in a mocked html', () => {
  let element: HTMLElement;
  let mockRepo: NasaApiRepo;
  beforeEach(() => {
    const TestRepo = function () {
      const { loadPhotos } = usePhotos(mockRepo);

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
      // expect(element).toBeInTheDocument();
      element = screen.getByRole('button');
      userEvent.click(element);
      expect(mockRepo.loadPhotos).toHaveBeenCalled();
    });
  });
});
