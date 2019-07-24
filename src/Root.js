import React, { Suspense, lazy } from "react";

import Loading from "./components/Loader";

const Home = lazy(() => import("./views/Home"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
);

export default App;
