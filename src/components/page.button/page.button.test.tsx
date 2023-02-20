import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { actualPageCreator } from '../../reducer/photos.actions.creator';
import { PageButtons } from './page.button';

describe('Given PageButtons component', () => {
  describe('When it is render', () => {
    test('Then the screen it should show the buttons', () => {
      render(<PageButtons></PageButtons>);

      const element = screen.getAllByRole('button')[0];
      expect(element).toBeInTheDocument();
    });
  });
});

// describe('When the user clicks in a light star (isFavorite=false)', () => {
//   test('Then it should add the class fa-solid to this element by toogle', () => {
//     const mockTemp = { ...MOCK_MARSPHOTOS[0] };
//     mockTemp.isFavorite = false;
//     render(<CardDetail info={mockTemp}></CardDetail>);
//     const element = screen.getByRole('button');
//     userEvent.click(element);
//     expect(element).toHaveClass('fa-solid');
//   });
// });
