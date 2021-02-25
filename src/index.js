import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDOM.render(
  // Provider은 react-redux를 사용하기 위해 store을 제공 받는다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
