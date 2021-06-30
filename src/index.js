import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reducer from "./redux/mainReducer";
import { createStore } from "redux";
import { getPosts, getUsers } from "./redux/mainReducer";

const store = createStore(reducer);

//fetch post data and users from https://jsonplaceholder.typicode.com/
if (!localStorage.getItem("state")) {
  const data = async () => {
    const fetchedData = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const jsonData = await fetchedData.json();
    store.dispatch(getPosts(jsonData));
  };
  const users = async () => {
    const fetchUsers = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const jsonUsers = await fetchUsers.json();
    store.dispatch(getUsers(jsonUsers));
  };

  data();
  users();
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <CssBaseline />
  </BrowserRouter>,
  document.getElementById("root")
);
