import { Card } from './card';
import { render, screen } from '@testing-library/react';
import { MOCK_MARSPHOTOS } from '../../mocks/marsPhotos';

describe('Given Card component', () => {
  describe('When it is render', () => {
    test('Then the screen it should show the text Camera', () => {
      render(<Card info={MOCK_MARSPHOTOS[0]}></Card>);
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });
});
