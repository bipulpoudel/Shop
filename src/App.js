import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//layout routes Imports
import MainLayoutRoute from "./routes/MainLayoutRoute";

//Pages Imports
import LandingPage from "./pages/Landing";
import Error404Page from "./pages/404Page";
import AuthLayoutRoute from "./routes/AuthLayoutRoute";
import LoginPage from "./pages/auth/Login";
import CartPage from "./pages/Cart";
import AdminLayoutRoute from "./routes/AdminLayoutRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={LandingPage} />

        <MainLayoutRoute exact path="/cart" component={CartPage} />

        <AuthLayoutRoute exact path="/auth/login" component={LoginPage} />

        <AdminLayoutRoute exact path="/admin" component={LoginPage} />

        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
}
