import styled, { keyframes } from "styled-components";
import Progress from "./Progress";
import Info from "./Info";
import Status from "./Status";
import Title from "./Title";
import LocationAndBudget from "./LocationAndBudget";
import Description from "./Description";
import Contractors from "./Contractors";
import ViewDetails from "./ViewDetails";
import Link from "./Link";

const fadeIn = keyframes`
from {
      opacity: 0
    }
    to {
      opacity: 1
    }
`;

const ProjectBlock = styled.div`
  background: #f2f2f2;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  min-height: 350px;
  display: flex;

  animation: ${fadeIn} 1s;
`;

ProjectBlock.Progress = Progress;
ProjectBlock.Info = Info;
ProjectBlock.Status = Status;
ProjectBlock.Title = Title;
ProjectBlock.LocationAndBudget = LocationAndBudget;
ProjectBlock.Description = Description;
ProjectBlock.Contractors = Contractors;
ProjectBlock.ViewDetails = ViewDetails;
ProjectBlock.Link = Link;

export default ProjectBlock;
