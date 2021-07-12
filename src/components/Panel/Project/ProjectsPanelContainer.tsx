import React, { ChangeEvent, useState } from "react";
import type { FC } from "react";
import ProjectsPanel from "./ProjectsPanel";

const projects = [
  {
    name: "Project A",
    desc: "Project A DESC",
    createdBy: {
      name: "James",
      avatar: "A",
    },
    id: "1",
  },
  {
    name: "Project B",
    desc: "Project B DESC",
    createdBy: {
      name: "Kick",
      avatar: "B",
    },
    id: "2",
  },
  {
    name: "Project C",
    desc: "Project C DESC",
    createdBy: {
      name: "Good",
      avatar: "C",
    },
    id: "3",
  },
];

const ProjectsPanelContainer: FC = () => {
  return <ProjectsPanel projects={projects} />;
};

export default ProjectsPanelContainer;
