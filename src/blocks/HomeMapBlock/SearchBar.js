import styled from "styled-components";

export default styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  flex-wrap: wrap;
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    font-size: 1rem;
  }
  .title {
    flex: 2;
    background-color: #2d9cdb;
    color: #fff;
    padding: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input {
    flex: 4;
    display: flex;
    padding: 28px 30px;
    align-items: center;
    input {
      flex: 1;
      border: none;
      height: 100%;
      font-size: 1.5rem;
      outline: none;
      padding: 0px 10px;
      font-family: "Nunito", sans-serif;
      font-weight: bold;
      @media only screen and (min-width: 320px) and (max-width: 479px) {
        font-size: 1rem;
      }
    }
    input::placeholder {
      font-family: "Nunito", sans-serif;
      font-style: italic;
      font-weight: bold;
      color: rgba(79, 79, 79, 0.8);
      @media only screen and (min-width: 320px) and (max-width: 479px) {
        font-size: 1rem;
      }
    }
  }
`;
