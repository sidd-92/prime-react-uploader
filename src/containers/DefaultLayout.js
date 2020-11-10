import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";
import { ProgressSpinner } from "primereact/progressspinner";

class DefaultLayout extends Component {
  //absolute w-1/2 z-10
  render() {
    return (
      <div>
        <Header />
        <div>
          <main>
            <Suspense fallback={<ProgressSpinner />}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/404" />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
