import React from "react";
import renderer from "react-test-renderer";

import HomeLayout from "../HomeLayout";

describe("HomeLayout Component", () => {
  it("renders correctly", () => {
    const component = renderer.create(<HomeLayout />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
