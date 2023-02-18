import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Add } from './add';

describe('Given the Add form component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Add></Add>);
  });
  describe('When called', () => {
    test('Then it should renderize a form', () => {
      const element = screen.getByRole('button');
      const element2 = screen.getByText(/OWN/i);
      expect(element).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
    });
  });

  describe('When clicked on the SEND button', () => {
    test('Then it should call handleClick', () => {
      const element = screen.getByRole('button');
      userEvent.click(element);
      expect(console.log).toHaveBeenCalled();
    });
  });
});
