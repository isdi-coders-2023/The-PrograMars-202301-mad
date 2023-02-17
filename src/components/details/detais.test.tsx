import { render, screen } from '@testing-library/react';
import { MarsPhotoStructure } from '../../models/marsPhoto';
import { Details } from './details';

describe('Given the details component', () => {
  describe('When it is called', () => {
    test('Then it should the component card details', () => {
      const mockPhotos: MarsPhotoStructure = {
        camera_name: 'test',
      } as MarsPhotoStructure;

      render(
        <Testcontext.Provider value={mockPhotos}>
          <Details></Details>
        </Testcontext.Provider>
      );
      const element = screen.getByText(/test/i);
      expect(element).toBeInTheDocument();
    });
  });
});
