import React from "react";
import { Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default MainLayoutRoute;
