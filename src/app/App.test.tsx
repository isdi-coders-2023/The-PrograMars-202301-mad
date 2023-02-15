import { render } from '@testing-library/react';
import { AppRouter } from '../components/app.router/approuter';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import App from './App';

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
