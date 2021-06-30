import React from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Blogs from "./pages/Blogs/Blogs";
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
      <Route path="/blogs">
        <Blogs />
      </Route>
    </Switch>
  );
}

export default App;
