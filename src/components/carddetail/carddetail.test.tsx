import { CardDetail } from './carddetail';
import { render, screen } from '@testing-library/react';
import { MOCK_MARSPHOTOS } from '../../mocks/marsPhotos';

describe('Given CardDetail component', () => {
  describe('When it is render', () => {
    test('Then the screen it should show the text Camera', () => {
      render(<CardDetail info={MOCK_MARSPHOTOS[0]}></CardDetail>);
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });
});
