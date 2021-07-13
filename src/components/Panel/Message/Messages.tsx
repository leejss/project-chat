import React from "react";
import type { FC } from "react";
import { Segment, Comment, Message } from "semantic-ui-react";

const Messages: FC = () => {
  return (
    <Segment>
      <Comment.Group>
        <Message />
        <Message />
        <Message />
      </Comment.Group>
    </Segment>
  );
};

export default Messages;
