import { screen, render } from '@testing-library/react';
import { Filter } from './filter';

describe('Given the component filter', () => {
  describe('When it is render', () => {
    test('Then it should print in the screen the radio buttons', () => {
      render(<Filter></Filter>);
      const elements = [
        screen.getAllByRole('radio');
        screen.getByText(/Select camera/i)
      ]
      expect(elements.length).toBe(7);
    });
  });
});
