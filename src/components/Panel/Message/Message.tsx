import React from "react";
import type { FC } from "react";
import { Comment } from "semantic-ui-react";

const Message: FC = () => {
  return (
    <Comment>
      <Comment.Avatar />
      <Comment.Content>
        <Comment.Author>username</Comment.Author>
        <Comment.Metadata>timestamp</Comment.Metadata>
        {/* Image */}
        <Comment.Text>message</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
