import styled from "styled-components";

const H4 = styled.h4`
  font-size: 1.2em;
  line-height: 1.25em;
  text-align: ${props => props.textAlign || "left"};
  &.small-size {
    font-size: 1.1rem;
  }

  &.medium-size {
    font-size: 2.1rem;
  }

  &.big-size {
    font-size: 2.65rem;
  }
`;

export default H4;
