import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 5px 0px;
  padding: 4px 11px;
  color: #fff;
  font-size: 0.7rem;
  background-color: ${props => {
    switch (props.status) {
      case "initiated":
        return "#27AE60";
      case "completed":
        return "#333333";
      case "defaulted":
        return "#EB5757";
      case "on-track":
        return "#F2994A";
      default:
        return "#9B51E0";
    }
  }};
`;
