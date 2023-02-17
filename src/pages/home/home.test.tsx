import { render, screen } from '@testing-library/react';
import HomePage from './home';

describe('Given the new item page', () => {
  describe('When it is render', () => {
    test('Then it should return a heading', () => {
      render(<HomePage></HomePage>);
      const elements = [
        ...screen.getAllByRole('paragraph'),
        ...screen.getAllByRole('link'),
      ];
      elements.forEach((item) => expect(item).toBeInTheDocument());
    });
  });
});
