import React from "react";
import renderer from "react-test-renderer";

import Loader from "../Loader";

describe("Loader Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Loader />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
