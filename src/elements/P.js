import styled from "styled-components";

const P = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  text-align: ${props => props.textAlign || "left"};
  &.small-size {
    font-size: 0.9em;
  }

  &.medium-size {
    font-size: 1.1em;
  }

  &.big-size {
    font-size: 1.25em;
  }
`;

export default P;
