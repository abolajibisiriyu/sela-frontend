import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
);

export default store;
