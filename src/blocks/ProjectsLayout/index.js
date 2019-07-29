import styled from "styled-components";
import Header from "./Header";
import HeaderSection from "./HeaderSection";
import List from "./List";

const ProjectsLayout = styled.section`
  background-color: #fff;
  padding: 150px 88px;
  min-height: 100vh;
  /* height: 500px; */

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    padding: 50px 10px;
  }
`;

ProjectsLayout.Header = Header;
ProjectsLayout.HeaderSection = HeaderSection;
ProjectsLayout.List = List;

export default ProjectsLayout;
