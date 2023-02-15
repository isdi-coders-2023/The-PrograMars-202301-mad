import { render, screen } from '@testing-library/react';
import Gallery from './gallery/gallery';

describe('Given Gallery component page', () => {
  describe('When it is rendering', () => {
    test('Then it should be return a heading', () => {
      render(<Gallery></Gallery>);
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
