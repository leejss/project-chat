import React from "react";
import type { FC } from "react";
import { Header, Input, Segment } from "semantic-ui-react";
import { IProject } from "../../../types";

type MessagesHeaderProps = {
  currentProject: IProject | null;
};

const MessagesHeader: FC<MessagesHeaderProps> = ({ currentProject }) => {
  return (
    <Segment clearing>
      <Header as="h2" floated="left">
        {currentProject && currentProject.name}
        <Header.Subheader>2Users</Header.Subheader>
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
