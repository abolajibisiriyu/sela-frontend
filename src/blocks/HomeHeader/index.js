import styled from "styled-components";
import Link from "./Link";
import Section from "./Section";

const HomeHeader = styled.header`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1563929322/sela/header_image.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #ffffff;
`;

HomeHeader.Section = Section;
HomeHeader.Link = Link;

export default HomeHeader;
