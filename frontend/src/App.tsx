import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { ROUTES, ADMIN_ROUTES } from './constants/routes';

const role = 'ADMIN';

const App: FC = () => {
  const routes = role === 'ADMIN' ? [...ADMIN_ROUTES, ...ROUTES] : ROUTES;

  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
