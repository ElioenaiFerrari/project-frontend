import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Sign } from "./pages";

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/sign" exact component={Sign} />
      </Switch>
    </BrowserRouter>
  );
}
