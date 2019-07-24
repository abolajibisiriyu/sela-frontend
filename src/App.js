import React from "react";

import Root from "./Root";
import ToastContainer from "./components/ToastContainer";
import ErrorBoundary from "./containers/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <ToastContainer />
    <Root />
  </ErrorBoundary>
);

export default App;
