import React from "react";
import type { FC } from "react";
import { Menu } from "semantic-ui-react";
import ProjectsPanelContainer from "./Project/ProjectsPanelContainer";
import UserPanelContainer from "./User/UserPanelContainer";

const SidePanel: FC = () => {
  return (
    <Menu fixed="left" vertical>
      <UserPanelContainer />
      <ProjectsPanelContainer />
    </Menu>
  );
};

export default SidePanel;
