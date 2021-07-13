import React from "react";
import type { FC } from "react";
import { Menu } from "semantic-ui-react";
import { IProject } from "../../../types";
import { useDispatch } from "react-redux";
import { setCurrentProject } from "../../../modules/project";

type ProjectItemProps = {
  project: IProject;
};

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const dispatch = useDispatch();
  const changeProject = () => {
    dispatch(setCurrentProject(project));
  };
  return <Menu.Item onClick={changeProject}>{project.name}</Menu.Item>;
};

export default ProjectItem;
