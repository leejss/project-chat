import React from "react";
import type { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  );
};

export default App;
