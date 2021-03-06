import styled from "styled-components";

export default styled.a`
  min-width: 325px;
  /* min-height: 104px; */
  min-height: 90px;

  background: #2d9cdb;
  border-radius: 50px;

  font-size: 1.2rem;
  padding: 15px 15px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  & > span {
  }

  animation: pulse 2s infinite;
  animation-timing-function: ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    font-size: 1rem;
    min-width: 220px;
  }
`;
