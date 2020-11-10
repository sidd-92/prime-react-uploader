import React from "react";
import Dashboard from "./components/views/Dashboard/Dashboard";
//links

export const linkPageDashboard = "/dashboard";
//linknames
export const linkNamePageDashboard = "Dashboard";
//imports
const PageDashboard = React.lazy(() =>
  import("./components/views/Dashboard/Dashboard")
);

const routes = [
  {
    path: linkPageDashboard,
    exact: true,
    name: linkNamePageDashboard,
    component: PageDashboard,
  },
];

export default routes;
