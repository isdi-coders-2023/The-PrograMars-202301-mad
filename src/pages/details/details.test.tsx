import { render, screen } from '@testing-library/react';
import Details from './details';

describe('Given the Details component', () => {
  describe('When rendered', () => {
    test('Then it should renderize a heading', () => {
      render(<Details></Details>);
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
