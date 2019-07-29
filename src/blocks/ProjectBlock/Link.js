import styled from "styled-components";

export default styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #2d9cdb;
  }
  svg {
    height: 14px;
  }
`;
