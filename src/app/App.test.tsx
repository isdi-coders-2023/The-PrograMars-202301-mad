import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('..'); //Faltaintroducir Header folder
jest.mock('..'); //Falta introducir AppRouter folder
jest.mock('..'); //Falta introducir Footer folder

describe('Given App component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Header></Header>);
  });
  describe('When it is render', () => {
    test('Then it should call Header, AppRouter & Footer', () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
