import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;

  & > h4 {
    margin-top: 150px;
  }

  & > p {
    margin-top: 26px;
  }

  & > a {
    margin-top: 150px;
  }

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    & > h4 {
      margin-top: 20px;
    }
    & > a {
      margin-top: 50px;
    }
    && > h4 {
      font-size: 2rem;
    }
    && > p {
      font-size: 1rem;
    }
  }
`;
