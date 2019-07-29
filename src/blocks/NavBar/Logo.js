import styled from "styled-components";

export default styled.a`
  margin: 40px 0;
  min-width: 149px;
  min-height: 51px;
  text-decoration: none;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s, border 0.3s;
  &:hover {
    color: #2d9cdb;
    border-color: #2d9cdb;
  }
`;
