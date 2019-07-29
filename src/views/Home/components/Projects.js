import React from "react";
import { connect } from "react-redux";

import ProjectsLayout from "../../../blocks/ProjectsLayout";
import SortBar from "../../../components/SortBar";
import Projects from "../../../components/Projects";
import Loader from "../../../components/Loader";

import { fetchProjects } from "../../../redux/projects/actions";
import H4 from "../../../elements/H4";

class HomeProjects extends React.Component {
  sortValues = [
    {
      value: "budget",
      text: "Budget"
    },
    {
      value: "startDate",
      text: "Start date"
    },
    {
      value: "endDate",
      text: "End Date"
    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      sortValue: ""
    };
  }

  componentDidMount() {
    this.fetchProjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortValue !== this.state.sortValue) {
      this.fetchProjects();
    }
  }

  fetchProjects = () => {
    this.props.fetchProjects(this.state.sortValue);
  };

  onSortValuechanged = e => {
    this.setState({ sortValue: e.target.value });
  };

  render() {
    const { sortValue } = this.state;
    const { projects } = this.props;
    return (
      <div ref={this.props.projectsRef}>
        <ProjectsLayout>
          <ProjectsLayout.Header>
            <ProjectsLayout.HeaderSection>
              <h4>All Projects</h4>
            </ProjectsLayout.HeaderSection>
            <SortBar
              onChange={this.onSortValuechanged}
              sortValue={sortValue}
              sortValues={this.sortValues}
            />
          </ProjectsLayout.Header>
          {projects.fetching ? (
            <Loader />
          ) : projects.error ? (
            <H4>An Error Occured Fetching</H4>
          ) : (
            <Projects projects={projects.projects} />
          )}
        </ProjectsLayout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(
  mapStateToProps,
  { fetchProjects }
)(HomeProjects);
