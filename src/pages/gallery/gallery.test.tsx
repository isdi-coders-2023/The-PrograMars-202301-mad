import { render, screen } from '@testing-library/react';
import GalleryPage from './gallery';

describe('Given the new item page', () => {
  describe('When it is render', () => {
    test('Then it should return a heading', () => {
      render(<GalleryPage></GalleryPage>);
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
