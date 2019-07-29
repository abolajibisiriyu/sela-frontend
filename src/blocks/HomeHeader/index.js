import styled, { keyframes } from "styled-components";
import Link from "./Link";
import Section from "./Section";

const fadeIn = keyframes`
from {
      opacity: 0
    }
    to {
      opacity: 1
    }
`;

const HomeHeader = styled.header`
  min-height: 100vh;
  height: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://res.cloudinary.com/abolajibisiriyu/image/upload/v1563929322/sela/header_image.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #ffffff;

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    padding-bottom: 40px;
  }

  animation: ${fadeIn} 1s;
`;

HomeHeader.Section = Section;
HomeHeader.Link = Link;

export default HomeHeader;
