import React from "react";
import type { FC } from "react";
import { Menu } from "semantic-ui-react";
import { IProject } from "../../../types";

type ProjectItemProps = {
  project: IProject;
};

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return <Menu.Item>{project.name}</Menu.Item>;
};

export default ProjectItem;
