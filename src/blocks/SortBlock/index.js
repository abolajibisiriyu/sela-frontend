import styled from "styled-components";
import Title from "./Title";
import Select from "./Select";
import Selectors from "./Selectors";

const SortBlock = styled.div`
  border: 1px solid #2d9cdb;
  background-color: #2d9cdb;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;

  @media only screen and (min-width: 320px) and (max-width: 479px) {
    flex: 100%;
    margin-top: 10px;
  }
`;

SortBlock.Title = Title;
SortBlock.Selectors = Selectors;
SortBlock.Select = Select;

export default SortBlock;
