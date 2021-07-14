import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import ProjectsPanel from "./ProjectsPanel";
import { projectsRef } from "../../../database/projects";
import { IProject } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProject } from "../../../modules/project";
import { RootState } from "../../../modules";

const ProjectsPanelContainer: FC = () => {
  const dispatch = useDispatch();
  const currentProjectName = useSelector(
    (state: RootState) => state.project.currentProject?.name
  );
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
  return (
    <ProjectsPanel
      projects={projects}
      currentProjectName={currentProjectName!}
    />
  );
};

export default ProjectsPanelContainer;
