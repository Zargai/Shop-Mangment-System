import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";


function App() {
  return (
    <>
      <Switch>     
        <Route path="/app"  component={AppLayout} />
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
}

export default App;
