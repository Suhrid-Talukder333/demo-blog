import React from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default App;
