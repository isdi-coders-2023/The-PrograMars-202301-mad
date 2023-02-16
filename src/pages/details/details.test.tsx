import { render, screen } from '@testing-library/react';
import { MOCK_MARSPHOTOS } from '../../mocks/marsPhotos';
import Details from './details';

describe('Given the Details component', () => {
  describe('When rendered', () => {
    test('Then it should renderize a heading', () => {
      render(<Details info={MOCK_MARSPHOTOS[0]}></Details>);
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });
});
