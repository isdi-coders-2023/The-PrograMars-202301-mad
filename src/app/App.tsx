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
  { label: 'Card', path: '/card' },
];

function App() {
  return (
    <>
      <Card i={1}></Card>
    </>
  );
}

export default App;
