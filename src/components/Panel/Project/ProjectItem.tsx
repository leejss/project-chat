import React from "react";
import type { FC } from "react";
import { Menu } from "semantic-ui-react";
import { IProject } from "../../../types";
import { useDispatch } from "react-redux";
import { setCurrentProject } from "../../../modules/project";

type ProjectItemProps = {
  project: IProject;
  currentProjectName: string;
};

const ProjectItem: FC<ProjectItemProps> = ({ project, currentProjectName }) => {
  const dispatch = useDispatch();
  const changeProject = () => {
    dispatch(setCurrentProject(project));
  };
  return (
    <Menu.Item
      onClick={changeProject}
      active={project.name === currentProjectName}
    >
      {project.name}
    </Menu.Item>
  );
};

export default ProjectItem;
