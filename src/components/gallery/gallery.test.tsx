import { render, screen } from '@testing-library/react';
import Gallery from '../../pages/gallery/gallery';

describe('Given Gallery component page', () => {
  describe('When it is rendering', () => {
    test('Then it should be return an image', () => {
      render(<Gallery></Gallery>);
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
