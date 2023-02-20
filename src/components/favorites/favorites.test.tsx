import { render, screen } from '@testing-library/react';
import { Favorites } from './favorites';

describe('Given the favorites component', () => {
  describe('When it is render', () => {
    test('Then it should return a heading', () => {
      render(<Favorites></Favorites>);
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
