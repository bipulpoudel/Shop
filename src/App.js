import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//layout routes Imports
import MainLayoutRoute from "./routes/MainLayoutRoute";
import AdminLayoutRoute from "./routes/AdminLayoutRoute";
import AuthLayoutRoute from "./routes/AuthLayoutRoute";

//Pages Imports
import LandingPage from "./pages/landing";
import Error404Page from "./pages/404page";
import LoginPage from "./pages/auth/login";
import CartPage from "./pages/cart";
import Category from "./pages/category";

export default function App() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={LandingPage} />

        <MainLayoutRoute exact path="/cart" component={CartPage} />

        <AuthLayoutRoute exact path="/auth/login" component={LoginPage} />

        <AdminLayoutRoute exact path="/admin/dashboard" component={LoginPage} />

        <AdminLayoutRoute exact path="/admin/categories" component={Category} />

        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
}
