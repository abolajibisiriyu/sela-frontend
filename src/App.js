import React from "react";
import { Provider } from "react-redux";

import Root from "./Root";
import ToastContainer from "./components/ToastContainer";
import ErrorBoundary from "./containers/ErrorBoundary";
import store from "./redux";

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ToastContainer />
      <Root />
    </Provider>
  </ErrorBoundary>
);

export default App;
