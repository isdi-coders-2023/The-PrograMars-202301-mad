/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import { AppRouter } from './approuter';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuOption } from '../app/App';

const mockOptions: MenuOption[] = [
  { label: 'Home', path: '/home' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'New Item', path: '/new-item' },
  { label: 'Favorites', path: '/favorites' },
  { label: 'About', path: '/about' },
  { label: 'Error', path: '/error' },
];

describe('Given AppRouter component', () => {
  let counter = 0;

  beforeEach(() => {
    render(
      <Router
        initialEntries={[
          '/home',
          '/gallery',
          '/new-item',
          '/favorites',
          '/about',
          '/error',
          '/abc',
        ]}
        initialIndex={counter}
      >
        <AppRouter menuOptions={mockOptions}></AppRouter>
      </Router>
    );
    counter++;
  });
  describe('When the route is home', () => {
    test('Then we should navigate to home', async () => {
      const element = await screen.findByRole('heading', { name: 'Home' });
      expect(element).toBeInTheDocument();
    });
  });
  describe('When the route is gallery', () => {
    test('Then we should navigate to gallery', async () => {
      const element = await screen.findByRole('heading', { name: 'Gallery' });
      expect(element).toBeInTheDocument();
    });
  });
  describe('When the route is new-item', () => {
    test('Then we should navigate to new-item', async () => {
      const element = await screen.findByRole('heading', { name: /New item/i });
      expect(element).toBeInTheDocument();
    });
  });
  describe('When the route is favorites', () => {
    test('Then we should navigate to favorites', async () => {
      const element = await screen.findByRole('heading', { name: 'Favorites' });
      expect(element).toBeInTheDocument();
    });
  });
  describe('When the route is about', () => {
    test('Then we should navigate to about', async () => {
      const element = await screen.findByRole('heading', {
        name: 'About',
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe('When the route is error', () => {
    test('Then we should navigate to error', async () => {
      const element = await screen.findByRole('heading');
      const element2 = await screen.findByText(/ERROR: PAGE NOT FOUND/i);
      expect(element).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
    });
  });
  describe('When the route is non of the above', () => {
    test('Then we should navigate to error', async () => {
      const element = await screen.findByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
