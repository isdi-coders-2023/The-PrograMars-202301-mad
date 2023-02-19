import { CardDetail } from './card.details';
import { render, screen } from '@testing-library/react';
import { MOCK_MARSPHOTOS } from '../../mocks/marsPhotos';
import userEvent from '@testing-library/user-event';

describe('Given CardDetail component', () => {
  describe('When it is render using index 0 of mock', () => {
    test('Then the screen it should show the text Camera', () => {
      render(<CardDetail info={MOCK_MARSPHOTOS[0]}></CardDetail>);
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });
});

describe('Given a CardDetail component', () => {
  describe('When it is render using index 0 of mock with property isFavorite changed to false', () => {
    test('Then the screen it should show the text Camera', () => {
      const mockTemp = { ...MOCK_MARSPHOTOS[0] };
      mockTemp.isFavorite = false;
      render(<CardDetail info={mockTemp}></CardDetail>);
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });
});

describe('When the user clicks in a light star (isFavorite=false)', () => {
  test('Then it should add the class fa-solid to this element by toogle', () => {
    const mockTemp = { ...MOCK_MARSPHOTOS[0] };
    mockTemp.isFavorite = false;
    render(<CardDetail info={mockTemp}></CardDetail>);
    const element = screen.getByRole('button');
    userEvent.click(element);
    expect(element).toHaveClass('fa-solid');
  });
});

describe('When the user clicks in a solid star (isFavorite=true)', () => {
  test('Then it should eliminate the class fa-solid to this element by toogle', () => {
    const mockTemp = { ...MOCK_MARSPHOTOS[0] };
    mockTemp.isFavorite = false;
    render(<CardDetail info={mockTemp}></CardDetail>);
    const element = screen.getByRole('button');
    userEvent.click(element);

    expect(element).toHaveClass('fa-solid fa-star');
  });
});
