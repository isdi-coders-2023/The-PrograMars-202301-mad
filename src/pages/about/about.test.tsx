import { render, screen } from '@testing-library/react';
import About from './about';

describe('Given the About component', () => {
  describe('When rendered', () => {
    test('Then it should renderize a heading', () => {
      render(<About></About>);
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
