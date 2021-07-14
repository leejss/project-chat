import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import ProjectsPanel from "./ProjectsPanel";
import { projectsRef } from "../../../database/projects";
import { IProject } from "../../../types";
import { useDispatch } from "react-redux";
import { setCurrentProject } from "../../../modules/project";

const ProjectsPanelContainer: FC = () => {
  const dispatch = useDispatch();
  const loaded = useRef<any[]>([]);
  const [projects, setProjects] = useState<IProject[] | []>([]);

  useEffect(() => {
    // set first project
    if (projects.length > 0) {
      dispatch(setCurrentProject(projects[0]));
    }
  }, [projects.length]);

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
