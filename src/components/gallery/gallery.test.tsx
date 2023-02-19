import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Gallery from '../../pages/gallery/gallery';

describe('Given Gallery component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Gallery></Gallery>);
  });
  describe('When it is rendering', () => {
    test('Then it should be return an image', async () => {
      act(async () => {
        const element = await screen.findAllByRole('img');
        expect(element.length).toBe(25);
      });
    });
  });
});
