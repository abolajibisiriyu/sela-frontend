import styled from "styled-components";

const Container = styled.aside`
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "100%"};
  width: 100%;
  min-height: ${({ minHeight }) => minHeight || "500px"};
  display: flex;
`;

export default Container;
