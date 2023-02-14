/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import { MenuOption } from '../app/App';
import { Nav } from './nav';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Given the nav element', () => {
  const mockOptions: MenuOption[] = [
    {
      label: 'test',
      path: '/test',
    },
  ];

  beforeEach(() => {
    render(
      <Router>
        <Nav options={mockOptions}></Nav>
      </Router>
    );
  });
  describe('When it is render', () => {
    test('Then it should appear in the screen', () => {
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
  describe('When the user clicks on the menu', () => {
    test('Then it should renderize the options menu', () => {
      const element = screen.getByRole('button');
      const menu = screen.getByRole('list');
      expect(menu).not.toHaveClass('menu--open');
      expect(element).toBeInTheDocument();
      userEvent.click(element);
      expect(menu).toHaveClass('menu--open');
    });
  });
});
