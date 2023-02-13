import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuOption } from '../app/App';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../home/page/home'));
const Gallery = lazy(() => import('../gallery/page/gallery'));
const NewItem = lazy(() => import('../new.item/page/new.item'));
const Favorites = lazy(() => import('../favorites/page/favorites'));
const About = lazy(() => import('../about/page/about'));

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  console.log('Create AppRouter');
  return (
    <Suspense>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        <Route path={menuOptions[1].path} element={<Gallery></Gallery>}></Route>
        <Route path={menuOptions[2].path} element={<NewItem></NewItem>}></Route>
        <Route
          path={menuOptions[3].path}
          element={<Favorites></Favorites>}
        ></Route>
        <Route path={menuOptions[4].path} element={<About></About>}></Route>

        <Route
          path={'*'}
          element={<Navigate to={'/home'} replace={true} />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
