import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';

import routes from './routes';

const Router = () => {
  return (
    <MainLayout>
      <Suspense>
        <Switch>
          <Redirect path="/" exact to="/dashboard" />
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default Router;
