import React from "react";
import type { FC } from "react";
import { Comment, Image } from "semantic-ui-react";
import { IMessage, IUser } from "../../../types";
import { timeFromNow } from "../../../util/formatTime";

type MessageProps = {
  message: IMessage;
  currentUser: IUser;
};

const Message: FC<MessageProps> = ({ message, currentUser }) => {
  return (
    <Comment>
      <Comment.Avatar src={message.sendBy.avatar} />
      <Comment.Content
        className={
          currentUser.uid === message.sendBy.uid ? "message__self" : ""
        }
      >
        <Comment.Author as="a">{message.sendBy.name}</Comment.Author>
        <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
        {message.image ? (
          <Image src={message.image} style={{ padding: "1em" }} />
        ) : (
          <Comment.Text>{message.content}</Comment.Text>
        )}
      </Comment.Content>
    </Comment>
  );
};

export default Message;
