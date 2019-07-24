import React from "react";
import { FiChevronDown } from "react-icons/fi";

import HomeHeader from "../../../blocks/HomeHeader";
import HomeNavbar from "./Navbar";
import H4 from "../../../elements/H4";
import P from "../../../elements/P";

function Header(props) {
  return (
    <HomeHeader>
      <HomeNavbar />
      <HomeHeader.Section>
        <H4 className="big-size" textAlign="center">
          Keep track of development <br /> projects near you
        </H4>
        <P className="big-size" textAlign="center">
          The Sela Platform enables stakeholders share real time information{" "}
          <br />
          on the state of infrastructure projects to ensure transparent delivery
        </P>
        <HomeHeader.Link>
          <span>SEE PROJECTS</span>
          <span>
            <FiChevronDown size="1.5em" />
          </span>
        </HomeHeader.Link>
      </HomeHeader.Section>
    </HomeHeader>
  );
}

export default Header;
