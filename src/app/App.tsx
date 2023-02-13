import './App.css';

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
        <Nav>{menuOptions}</Nav>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
