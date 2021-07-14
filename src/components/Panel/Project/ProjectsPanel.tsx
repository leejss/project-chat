import React, { useState } from "react";
import type { FC } from "react";
import { Header, Icon, Menu } from "semantic-ui-react";
import { IProject } from "../../../types";
import ProjectItem from "./ProjectItem";
import ProjectFormModalContainer from "./ProjectFormModalContainer";

type ProjectsPanelProps = {
  projects: IProject[];
  currentProjectName: string;
};

const ProjectsPanel: FC<ProjectsPanelProps> = ({
  projects,
  currentProjectName,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Menu.Item>
        <Menu.Menu>
          <Menu.Header>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <Icon name="compass" />
                PROJECTS
              </span>
              <Icon
                name="add"
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
            </div>
          </Menu.Header>

          {/* Project List */}
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                currentProjectName={currentProjectName}
              />
            ))
          ) : (
            <Header>No Project</Header>
          )}
        </Menu.Menu>
      </Menu.Item>
      {/* Modal */}
      <ProjectFormModalContainer open={open} setOpen={setOpen} />
    </>
  );
};

export default ProjectsPanel;
