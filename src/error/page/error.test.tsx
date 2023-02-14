import { render, screen } from '@testing-library/react';
import ErrorPage from './error';

describe('Given the error page', () => {
  describe('When it is render', () => {
    test('Then it should return a heading', () => {
      render(<ErrorPage></ErrorPage>);
      const element = screen.getByRole('heading');
      const element2 = screen.getByText(/ERROR: PAGE NOT FOUND/i);
      expect(element).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
    });
  });
});
