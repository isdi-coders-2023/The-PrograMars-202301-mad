import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { NasaApiRepo } from '../services/repository/nasa.api.repo';
import { usePhotos } from './use.photo.mars';

describe('Given the usePhotos custom hook and Test component', () => {
  let mockRepo: NasaApiRepo;
  beforeEach(async () => {
    mockRepo = {
      loadPhotos: jest.fn(),
    } as unknown as NasaApiRepo;

    const TestComponent = function () {
      const { loadPhotos } = usePhotos(mockRepo);
      return (
        <>
          <button onClick={() => loadPhotos()}></button>
        </>
      );
    };
    await act(async () => render(<TestComponent></TestComponent>));
  });

  describe('When the test is rendered and the button is clicked', () => {
    test('Then it should the loadPhotos', () => {
      const element = screen.findByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
