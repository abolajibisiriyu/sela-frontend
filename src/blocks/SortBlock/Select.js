import styled from "styled-components";

import iconSrc from "../../assets/images/expand-icon.svg";

const Select = styled.select`
  color: #fff;
  background-color: #2d9cdb;
  appearance: none;
  min-width: 150px;
  outline: none;
  border: none;
  padding: 5px 40px 5px 10px;
  border-radius: 0;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Nunito", sans-serif;

  background-image: url(${iconSrc});
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: right center;
  background-position-x: 95%;
`;

export default Select;
