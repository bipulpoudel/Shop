import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//layout routes Imports
import MainLayoutRoute from "./routes/MainLayoutRoute";

//Pages Imports
import LandingPage from "./pages/Landing";
import Error404Page from "./pages/404Page";

export default function App() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={LandingPage} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
}
