import styled from "styled-components";

export default styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 5px 0px 0px 4px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  position: relative;

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    padding: 20px 5px;
  }
`;
