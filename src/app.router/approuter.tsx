import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuOption } from '../app/App';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/home'));
const Gallery = lazy(() => import('../pages/gallery'));
const NewItem = lazy(() => import('../pages/new.item'));
const Favorites = lazy(() => import('../pages/favorites'));
const About = lazy(() => import('../pages/about'));
const Card = lazy(() => import('../pages/error'));
const Error = lazy(() => import('../pages/error'));

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
        <Route path={menuOptions[5].path} element={<Card></Card>}></Route>
        <Route path={'/error'} element={<Error></Error>}></Route>

        <Route
          path={'*'}
          element={<Navigate to={'/error'} replace={true} />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
