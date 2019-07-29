import React from "react";

import HomeHeader from "../../../blocks/HomeHeader";
import HomeNavbar from "./Navbar";
import H4 from "../../../elements/H4";
import P from "../../../elements/P";

import chevronIcon from "../../../assets/images/expand-icon.svg";

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
        <HomeHeader.Link onClick={props.executeScroll}>
          <span>SEE PROJECTS</span>
          <span>
            <img src={chevronIcon} alt="scroll down" />
          </span>
        </HomeHeader.Link>
      </HomeHeader.Section>
    </HomeHeader>
  );
}

export default Header;
