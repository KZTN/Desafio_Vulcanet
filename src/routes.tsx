import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
