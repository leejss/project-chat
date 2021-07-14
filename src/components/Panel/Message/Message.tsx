import React from "react";
import type { FC } from "react";
import { Comment } from "semantic-ui-react";
import { IMessage } from "../../../types";

type MessageProps = {
  message: IMessage;
};

const Message: FC<MessageProps> = ({ message }) => {
  return (
    <Comment>
      <Comment.Avatar />
      <Comment.Content>
        <Comment.Author>{message.sendBy.name}</Comment.Author>
        <Comment.Metadata>{message.timestamp}</Comment.Metadata>
        {/* Image */}
        <Comment.Text>{message.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
