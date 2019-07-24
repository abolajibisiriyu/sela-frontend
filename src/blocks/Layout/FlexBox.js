import styled from "styled-components";

export default styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props => props.justify || "space-between"};
  margin: ${props => props.margin || "0"};
  & > * {
    flex: 50%;
  }
`;
