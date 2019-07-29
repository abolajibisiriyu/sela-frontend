import React from "react";
import renderer from "react-test-renderer";

import Project from "../Project";

describe("Project Component", () => {
  it("renders correctly", () => {
    const project = {
      id: "123",
      title: "Construction of Health Center",
      image:
        "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329602/sela/projects/image_4.png",
      status: {
        description: "Not initiated",
        status: "not-initiated"
      },
      progress: 0,
      description:
        "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
      location: "Ikorodu, Lagos",
      budget: 55000,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      contractors: [
        {
          name: "John Doe",
          image:
            "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
        },
        {
          name: "Flutterwave",
          image:
            "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
        }
      ]
    };
    const component = renderer.create(<Project project={project} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
