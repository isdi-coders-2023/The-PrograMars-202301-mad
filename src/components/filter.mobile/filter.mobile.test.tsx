import { screen, render } from '@testing-library/react';
import { FilterMobile } from './filter.mobile';

describe('Given the component filter', () => {
  describe('When it is render', () => {
    test('Then it should print in the screen the radio buttons', () => {
      render(<FilterMobile></FilterMobile>);
      const selectElement = screen.getByRole('combobox');
      const titleElement = screen.getByText(/choose a camera/i);

      expect(selectElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });
  });
});
