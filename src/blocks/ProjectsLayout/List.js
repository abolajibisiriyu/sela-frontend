import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 46px;
  margin-top: 50px;

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    grid-template-columns: auto;
  }
`;
