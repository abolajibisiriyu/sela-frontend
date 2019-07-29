import styled from "styled-components";

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5em;
  text-align: ${props => props.textAlign || "left"};
  &.small-size {
    font-size: 0.9rem;
  }

  &.medium-size {
    font-size: 1.1rem;
  }

  &.big-size {
    font-size: 1.25rem;
  }
`;

export default P;
