import React from "react";
import type { FC } from "react";
import { Segment, Comment } from "semantic-ui-react";
import { IMessage, IUser } from "../../../types";
import Message from "./Message";

type MessagesProps = {
  messages: IMessage[];
  currentUser: IUser | null;
};

const Messages: FC<MessagesProps> = ({ messages, currentUser }) => {
  return (
    <Segment>
      <Comment.Group className="messages">
        {messages.length > 0 &&
          messages.map((ms) => (
            <Message
              key={ms.timestamp}
              message={ms}
              currentUser={currentUser!}
            />
          ))}
      </Comment.Group>
    </Segment>
  );
};

export default Messages;
