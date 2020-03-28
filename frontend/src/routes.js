import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/logon";
import Register from './pages/Register';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      </Switch>
          <Route path='/' exact component={Logon} />
          <Route path='/register' component={Register} />
    </BrowserRouter>
  );
}
