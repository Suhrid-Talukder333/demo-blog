import React from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Blogs from "./pages/Blogs/Blogs";
import Post from "./pages/Post/Post";
import Account from "./pages/Account/Account";
import Create from "./pages/Create/Create";
import Update from "./pages/Update/Update";
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
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/edit/:itemid">
        <Update />
      </Route>
    </Switch>
  );
}

export default App;
