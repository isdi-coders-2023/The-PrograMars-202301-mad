import { render, screen } from '@testing-library/react';
import { PhotosContext } from '../../app.context/app.context';
import { UseMarsStructure } from '../../hooks/use.photo.mars';
import { Details } from './details';

describe('Given the details component', () => {
  describe('When it is called', () => {
    test('Then it should the component card details', () => {
      const mockPhotos = {
        state: 'test',
        loadPhotos: 'hola',
      } as unknown as UseMarsStructure;

      render(
        <PhotosContext.Provider value={mockPhotos}>
          <Details></Details>
        </PhotosContext.Provider>
      );
      const element = screen.getByText(/test/i);
      expect(element).toBeInTheDocument();
    });
  });
});
