import React from "react";
import type { FC } from "react";
import { Menu } from "semantic-ui-react";
import ProjectsPanelContainer from "./Project/ProjectsPanelContainer";
import UserPanelContainer from "./User/UserPanelContainer";
import PresencePanelContainer from "./DirectMessage/DirectPanelContainer";

const SidePanel: FC = () => {
  return (
    <Menu fixed="left" vertical>
      <UserPanelContainer />
      <ProjectsPanelContainer />
      <PresencePanelContainer />
    </Menu>
  );
};

export default SidePanel;
