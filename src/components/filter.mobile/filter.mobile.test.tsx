/* eslint-disable testing-library/no-render-in-setup */
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PhotosContext } from '../../app.context/app.context';
import { mockContext } from '../../mocks/tests.mocks';
import { FilterMobile } from './filter.mobile';

describe('Given the component filter', () => {
  beforeEach(() => {
    render(
      <PhotosContext.Provider value={mockContext}>
        <FilterMobile></FilterMobile>
      </PhotosContext.Provider>
    );
  });

  describe('When it is render', () => {
    test('Then it should print in the screen the radio buttons', () => {
      const selectElement = screen.getByRole('combobox');
      const titleElement = screen.getByText(/camera/i);

      expect(selectElement).toBeInTheDocument();
      expect(titleElement).toBeInTheDocument();
    });

    describe('When select a filter option', () => {
      test('Then it should call the context load method', () => {
        const element = screen.getByText(/camera/i);
        expect(element).toBeInTheDocument();
        const select = screen.getByTestId('select');

        userEvent.selectOptions(select, 'mast');
        expect(mockContext.loadPhotos).toHaveBeenCalled();
      });
    });
  });
});
