import { render, screen } from '@testing-library/react';
import NewItem from './new.item';

describe('Given the new item page', () => {
  describe('When it is render', () => {
    test('Then it should return a heading', () => {
      render(<NewItem></NewItem>);
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
