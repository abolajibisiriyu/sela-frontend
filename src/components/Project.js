import React from "react";
import truncate from "lodash/truncate";

import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";

import ProjectBlock from "../blocks/ProjectBlock";
import ProgressBar from "./ProgressBar";
import H4 from "../elements/H4";
import P from "../elements/P";
import A from "../elements/A";

import { ReactComponent as DetailsIcon } from "../assets/images/forward icon.svg";
// import moneyIcon from "../assets/images/money icon.svg";

function Project({ project }) {
  const descriptionMaxLength = 150;
  return (
    <ProjectBlock>
      <ProjectBlock.Progress image={project.image}>
        <ProjectBlock.Status status={project.status.status}>
          {project.status.description}
        </ProjectBlock.Status>
        <ProgressBar progress={project.progress} />
      </ProjectBlock.Progress>
      <ProjectBlock.Info>
        <ProjectBlock.Title>
          <H4 className="small-size">{project.title}</H4>
        </ProjectBlock.Title>
        <ProjectBlock.LocationAndBudget>
          <span>
            <FaMapMarkerAlt /> {project.location}
          </span>
          <span>
            <FaMoneyBillAlt /> Budget: NGN
            {project.budget.toLocaleString("en-NG")}
          </span>
        </ProjectBlock.LocationAndBudget>
        <ProjectBlock.Description>
          <P>
            {truncate(project.description, { length: descriptionMaxLength })}{" "}
            {project.description.length > descriptionMaxLength && (
              <A className="read-more">Read More</A>
            )}
          </P>
        </ProjectBlock.Description>
        <ProjectBlock.Contractors>
          <H4>Contractors</H4>
          <div className="contractors">
            {project.contractors.map((contractor, i) => (
              <img key={i} src={contractor.image} alt={contractor.name} />
            ))}
          </div>
        </ProjectBlock.Contractors>
        <ProjectBlock.ViewDetails>
          <ProjectBlock.Link>
            View More Details <DetailsIcon />
          </ProjectBlock.Link>
        </ProjectBlock.ViewDetails>
      </ProjectBlock.Info>
    </ProjectBlock>
  );
}

export default Project;
