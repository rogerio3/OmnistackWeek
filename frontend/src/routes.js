import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './pages/Profile';
import Logon from "./pages/logon";
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      </Switch>
          <Route path='/' exact component={Logon} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/newincident' component={NewIncident} />

    </BrowserRouter>
  );
}
