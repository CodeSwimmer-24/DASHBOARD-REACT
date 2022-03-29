/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Wrapper from 'layouts/Wrapper';
import { dashboardLayoutRoutes, authenticationLayoutRoutes } from 'routes';

const childRoutes = (Layout, routes) =>
  routes.map(({ component: Component, guard, children, path }, index) => {
    const Guard = guard || React.Fragment;

    return children && children.length > 0 ? (
      children.map((element, ind) => {
        const GuardObj = element.guard || React.Fragment;
        const ElementComponent = element.component || React.Fragment;

        return (
          <Route
            key={ind}
            path={element.path}
            exact
            render={props => (
              <Layout>
                <GuardObj>
                  <ElementComponent {...props} />
                </GuardObj>
              </Layout>
            )}
          />
        );
      })
    ) : Component ? (
      <Route
        key={index}
        path={path}
        exact
        render={props =>
          Layout ? (
            <Layout>
              <Guard>
                <Component {...props} />
              </Guard>
            </Layout>
          ) : (
            <Guard>
              <Component {...props} />
            </Guard>
          )
        }
      />
    ) : null;
  });

function Routes(): any {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        {childRoutes(Wrapper, dashboardLayoutRoutes)}
        {childRoutes(null, authenticationLayoutRoutes)}
      </Switch>
    </Router>
  );
}
export default Routes;
