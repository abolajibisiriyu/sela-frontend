import styled from "styled-components";

const ProgressBar = styled.div`
  width: 100%;
  height: ${props => props.height || "28px"};
  background-color: ${props => props.bgColor || "#f2f2f2"};
  border-radius: 5px;
  position: relative;
  & > .progress-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.6rem;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0.6rem;
    color: ${props =>
      props.progress && parseInt(props.progress, 10) >= 80 ? "#fff" : "#333"};
  }
  & > .innerBar {
    height: 100%;
    border-radius: ${props =>
      props.progress && parseInt(props.progress, 10) === 100
        ? "5px"
        : "5px 0px 0px 5px"};
    width: ${props => `${props.progress}%`};
    background-color: ${props => props.progressColor || "#2d9cdb"};
  }
`;

export default ProgressBar;
