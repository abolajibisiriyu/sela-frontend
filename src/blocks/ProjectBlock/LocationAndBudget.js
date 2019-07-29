import styled from "styled-components";

export default styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    span:first-of-type {
      margin-bottom: 10px;
    }
  }
`;
