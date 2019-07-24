import styled from "styled-components";

export default styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 480px;
  }
  &.content-right {
    align-items: flex-end;
  }
`;
