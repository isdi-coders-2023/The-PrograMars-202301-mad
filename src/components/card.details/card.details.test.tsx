import { render, screen } from '@testing-library/react';
import { MarsPhotoStructure } from '../../models/marsPhoto';
import { CardDetails } from './card.details';

describe('Given the card details component', () => {
  describe('When it is called', () => {
    test('Then it should render', () => {
      const mockPhotos: MarsPhotoStructure = {
        camera_name: 'test',
      } as MarsPhotoStructure;

      render(<CardDetails info={mockPhotos}></CardDetails>);
      const elements = [
        ...screen.getAllByRole('listitem'),
        screen.getByRole('img'),
      ];

      elements.forEach((item) => expect(item).toBeInTheDocument());
    });
  });
});
