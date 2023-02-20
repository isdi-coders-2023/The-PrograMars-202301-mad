/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import { PhotosContext } from '../../app.context/app.context';
import { mockContext } from '../../mocks/tests.mocks';
import { ChangePage } from './changePage';
beforeEach(() => {
  render(
    <PhotosContext.Provider value={mockContext}>
      <ChangePage></ChangePage>;
    </PhotosContext.Provider>
  );
});
describe('Given the change page component', () => {
  describe('When it is render', () => {
    test('Then it should show two icons', () => {
      const elements = screen.getAllByRole('img');
      expect(elements.length).toBe(2);
    });
  });
  describe('When the user click on previous page', () => {
    test('Then it should fired handlepage function', () => {
      const elements = screen.getAllByRole('img');
      fireEvent.click(elements[0]);
      expect(mockContext.loadPhotos).toHaveBeenCalled();
    });
  });
  describe('When the user click on next page', () => {
    test('Then it should fired handlepage function', () => {
      const elements = screen.getAllByRole('img');
      fireEvent.click(elements[1]);
      expect(mockContext.loadPhotos).toHaveBeenCalled();
    });
  });
});
