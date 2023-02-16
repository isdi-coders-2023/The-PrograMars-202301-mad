import { AppRouter } from '../app.router/approuter';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Nav } from '../nav/nav';
import { Card } from '../card/card';

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
      <Card></Card>
      {/* <Header>
        <Nav options={menuOptions}></Nav>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer> */}
    </>
  );
}

export default App;
