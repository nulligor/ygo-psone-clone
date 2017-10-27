import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from "./redux/utils/configureStore";
import Root  from "./containers/Root";

window.onload = function() {
      let store = configureStore();
      ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.getElementById("app")
      )
      // ReactDOM.render(
      //   <Provider store={store}>
      //     <App store={store}/>
      //   </Provider>,
      //   document.getElementById('app')
      // )
}
