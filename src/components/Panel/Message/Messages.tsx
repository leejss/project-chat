import React from "react";
import type { FC } from "react";
import { Segment, Comment, Message } from "semantic-ui-react";
import { IMessage } from "../../../types";

type MessagesProps = {
  messages: IMessage[];
};

const Messages: FC<MessagesProps> = ({ messages }) => {
  return (
    <Segment>
      <Comment.Group>
        {messages &&
          messages.map((ms) => <Message key={ms.timestamp} message={ms} />)}
      </Comment.Group>
    </Segment>
  );
};

export default Messages;
