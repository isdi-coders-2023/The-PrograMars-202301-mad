import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuOption } from '../app/App';
import { lazy, Suspense } from 'react';

<<<<<<< HEAD:src/app.router/approuter.tsx
const Home = lazy(() => import('../pages/home'));
const Gallery = lazy(() => import('../pages/gallery'));
const NewItem = lazy(() => import('../pages/new.item'));
const Favorites = lazy(() => import('../pages/favorites'));
const About = lazy(() => import('../pages/about'));
const Error = lazy(() => import('../pages/error'));
=======
const Home = lazy(() => import('../../pages/homepage/homepage'));
const Gallery = lazy(() => import('../../pages/gallery/gallery'));
const NewItem = lazy(() => import('../../pages/new item/new.item'));
const Favorites = lazy(() => import('../../pages/favorites/favorites'));
const About = lazy(() => import('../../pages/about/about'));
const Error = lazy(() => import('../../pages/error/error'));
>>>>>>> 917551ee47a122f658ba23b80e6b018c221db51f:src/components/app.router/approuter.tsx

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
        <Route path={'/error'} element={<Error></Error>}></Route>

        <Route
          path={'*'}
          element={<Navigate to={'/error'} replace={true} />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
