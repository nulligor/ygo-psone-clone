import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from "./redux/utils/configureStore";
import Root  from "./containers/Root";
let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById("app")
);
