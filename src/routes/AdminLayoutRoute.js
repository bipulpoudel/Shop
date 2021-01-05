import React from "react";
import { Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

const AdminLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AdminLayout>
          <Component {...props} />
        </AdminLayout>
      )}
    />
  );
};

export default AdminLayoutRoute;
