import React from "react";
import renderer from "react-test-renderer";

import ProgressBar from "../ProgressBar";

describe("ProgressBar Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ProgressBar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
