import styled from "styled-components";

import Sections from "./Sections";
import Section from "./Section";
import MainText from "./MainText";
import Features from "./Features";
import Feature from "./Feature";
import Actions from "./Actions";

const Hero = styled.div`
  min-height: 736px;
  height: 736px;
  background-color: #f3c6bd;
  background-image: url("https://res.cloudinary.com/dwoc5fknz/image/upload/v1563812943/busha_pay/hero_back.png");
  background-repeat: no-repeat;
  background-size: 782px;
  background-position: 85% 80%;
`;

Hero.Sections = Sections;
Hero.Section = Section;
Hero.MainText = MainText;
Hero.Features = Features;
Hero.Feature = Feature;
Hero.Actions = Actions;

export default Hero;
