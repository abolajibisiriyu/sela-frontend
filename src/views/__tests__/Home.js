import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import Home from "../Home";

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ projects: {} });

describe("Home Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
