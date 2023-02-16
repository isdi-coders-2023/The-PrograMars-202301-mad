import { screen, render } from '@testing-library/react';
import { Filter } from './filter.desktop';

describe('Given the component filter', () => {
  describe('When it is render', () => {
    test('Then it should print in the screen the radio buttons', () => {
      render(<Filter></Filter>);
      const radioElement = screen.getAllByRole('radio');
      const textElement = screen.getByRole('group');

      expect(radioElement.length).toBe(7);
      expect(textElement).toBeInTheDocument();
    });
  });
});
