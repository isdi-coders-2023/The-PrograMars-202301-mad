import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When it is render', () => {
    test('Then the screen it should show the "NASA API" text', () => {
      render(<Footer></Footer>);
      const element = screen.getByText(/NASA API/i);
      expect(element).toBeInTheDocument();
    });
  });
});
