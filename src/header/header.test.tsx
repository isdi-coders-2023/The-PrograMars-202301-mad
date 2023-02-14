import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the header component', () => {
  describe('When it is render', () => {
    test('Then it should have the title in the screen', () => {
      render(
        <Header>
          <></>
        </Header>
      );
      const elements = [
        screen.getByText(/progra-mars/i),
        screen.getByRole('heading'),
        screen.getByRole('img'),
      ];
      elements.forEach((item) => expect(item).toBeInTheDocument());
    });
  });
});
