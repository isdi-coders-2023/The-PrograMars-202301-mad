import { AppRouter } from '../components/app.router/approuter';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Nav } from '../components/nav/nav';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Home', path: '/home' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'New Item', path: '/new-item' },
  { label: 'Favorites', path: '/favorites' },
  { label: 'About', path: '/about' },
];

function App() {
  return (
    <>
      <Header>
        <Nav options={menuOptions}></Nav>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
