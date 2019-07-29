import styled from "styled-components";

export default styled.div`
  padding-top: 10px;
  & > .header {
    & > h4 {
      font-size: 0.8rem;
    }
  }
  .contractors {
    display: flex;
    padding: 5px 0px;

    overflow-x: hidden;

    & > img {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      margin-right: 20px;
    }

    & > img:last-of-type {
      margin: 0;
    }
  }
`;
