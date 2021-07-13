import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import ProjectsPanel from "./ProjectsPanel";
import { projectsRef } from "../../../database/projects";
import { IProject } from "../../../types";

const ProjectsPanelContainer: FC = () => {
  const loaded = useRef<any[]>([]);
  const [projects, setProjects] = useState<IProject[] | []>([]);

  useEffect(() => {
    // add event listener
    projectsRef.on("child_added", (snap) => {
      loaded.current.push(snap.val());
      setProjects((prev) => prev.concat(snap.val()));
    });
  }, []);
  return <ProjectsPanel projects={projects} />;
};

export default ProjectsPanelContainer;
