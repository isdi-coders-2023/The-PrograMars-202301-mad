import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { PhotosContext } from '../../app.context/app.context';
import { mockContext } from '../../mocks/tests.mocks';
import Gallery from '../../pages/gallery/gallery';

describe('Given Gallery component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <PhotosContext.Provider value={mockContext}>
        <Gallery></Gallery>
      </PhotosContext.Provider>
    );
  });
  describe('When it is rendering', () => {
    test('Then it should be return a combobox', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
      const element2 = screen.getByRole('main');
      expect(element2).toBeInTheDocument();
    });
  });

  describe('When it is rendering after call', () => {
    test('Then it should be return an image', async () => {
      act(async () => {
        const element = await screen.findAllByRole('img');
        expect(element.length).toBe(1);
      });
    });
  });
});
