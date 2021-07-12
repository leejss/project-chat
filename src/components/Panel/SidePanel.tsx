import React from "react";
import type { FC } from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./User/UserPanel";
import ProjectsPanel from "./Project/ProjectsPanel";
import ProjectsPanelContainer from "./Project/ProjectsPanelContainer";

const SidePanel: FC = () => {
  return (
    <Menu fixed="left" vertical>
      <UserPanel />
      <ProjectsPanelContainer />
    </Menu>
  );
};

export default SidePanel;
