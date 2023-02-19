import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GalleryPage from './gallery';

describe('Given the new item page', () => {
  describe('When it is render', () => {
    test('Then it should return a heading', async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act
      act(async () => {
        render(<GalleryPage></GalleryPage>);
        const element = await screen.findByRole('img');
        expect(element).toBeInTheDocument();
      });
    });
  });
});
