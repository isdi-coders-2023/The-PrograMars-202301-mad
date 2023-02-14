import { render, screen } from '@testing-library/react';
import { MenuOption } from '../app/App';
import { Nav } from './nav';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given the nav element', () => {
  describe('When it is render', () => {
    test('Then it should appear in the screen', () => {
      const mockOptions: MenuOption[] = [
        {
          label: 'test',
          path: '/test',
        },
      ];
      render(
        <Router>
          <Nav options={mockOptions}></Nav>
        </Router>
      );
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
