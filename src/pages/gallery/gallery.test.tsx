import { render, screen } from '@testing-library/react';
import { Card } from '../../components/card/card';
import { Filter } from '../../components/filter/filter';
import Gallery from './gallery';

describe('Given Gallery component page', () => {
  describe('When it is rendering', () => {
    test('Then it should be return a heading', () => {
      render(<Gallery></Gallery>);
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
