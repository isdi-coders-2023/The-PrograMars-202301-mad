import { render, screen } from '@testing-library/react';
import { PhotosContext } from '../../context/photos.context';
import { mockContext } from '../../mocks/tests.mocks';
import { Details } from './details';

describe('Given the details component', () => {
  describe('When it is called', () => {
    test('Then it should the component card details', () => {
      render(
        <PhotosContext.Provider value={mockContext}>
          <Details></Details>
        </PhotosContext.Provider>
      );
      const element = screen.getByText(/camera/i);
      expect(element).toBeInTheDocument();
    });
  });
});
