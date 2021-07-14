import React from "react";
import type { FC } from "react";
import { Header, Input, Segment } from "semantic-ui-react";
import { IProject } from "../../../types";
import { displayUsers } from "../../../util/countUsers";

type MessagesHeaderProps = {
  currentProject: IProject | null;
  userCtn: number;
};

const MessagesHeader: FC<MessagesHeaderProps> = ({
  currentProject,
  userCtn,
}) => {
  return (
    <Segment clearing>
      <Header as="h2" floated="left">
        {currentProject && currentProject.name}
        <Header.Subheader>{displayUsers(userCtn)}</Header.Subheader>
      </Header>
      <Header floated="right">
        <Input
          size="mini"
          icon="search"
          name="searchMessage"
          placeholder="검색"
        />
      </Header>
    </Segment>
  );
};

export default MessagesHeader;
