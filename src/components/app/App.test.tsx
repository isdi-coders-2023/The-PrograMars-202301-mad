import { render } from '@testing-library/react';
import App from './App';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AppRouter } from '../app.router/approuter';

jest.mock('../header/header'); //Faltaintroducir Header folder
jest.mock('../app.router/approuter'); //Falta introducir AppRouter folder
jest.mock('../footer/footer'); //Falta introducir Footer folder

describe('Given App component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Header>
        <></>
      </Header>
    );
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
