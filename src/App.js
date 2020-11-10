import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/App.css";
//const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
import DefaultLayout from "./containers/DefaultLayout";
class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <div>Page 404</div>}
          />
          <Route
            path="/dashboard"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
