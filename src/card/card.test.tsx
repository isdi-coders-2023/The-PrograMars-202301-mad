import { Card } from './card';
import { render, screen } from '@testing-library/react';

describe('Given Card component', () => {
  describe('When it is render', () => {
    test('Then the screen it should show the text Camera', () => {
      render(<Card></Card>);
      const element = screen.getByText(/Camera/i);
      expect(element).toBeInTheDocument();
    });
  });
});
