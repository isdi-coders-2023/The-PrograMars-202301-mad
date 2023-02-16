import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Given a Home page', () => {
  describe('When it is render', () => {
    test('Then the screen it should show a heading', () => {
      render(<Home></Home>);
      const elements = [
        ...screen.getAllByRole('paragraph'),
        ...screen.getAllByRole('link'),
      ];
      elements.forEach((item) => expect(item).toBeInTheDocument());
    });
  });
});
