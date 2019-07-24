import styled from "styled-components";

export default styled.a`
  background-color: ${props => (props.green ? "#149c24" : "#fff")};
  color: ${props => (props.green ? "#fff" : "#149c24")};
  border-radius: 2px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  /* min-width: 160px; */
  width: fit-content;
  height: 48px;
  padding: 0px 40px;
  font-size: 0.9em;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
