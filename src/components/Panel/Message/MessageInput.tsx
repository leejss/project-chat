import React, { ChangeEvent, MouseEvent, useState } from "react";
import type { FC } from "react";
import { Button, Input, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { saveMessage } from "../../../database/messages";
import { saveDirectMessage } from "../../../database/directMessages";

type MessageInputProps = {
  openModal: () => void;
};

const MessageInput: FC<MessageInputProps> = ({ openModal }) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const currentProject = useSelector(
    (state: RootState) => state.project.currentProject
  );
  const [content, setContent] = useState<string>("");
  const sendMessage = () => {
    if (currentUser && currentProject) {
      saveMessage(content, currentProject.id, currentUser);
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    sendMessage();
    setContent("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  return (
    <Segment className="message__form">
      <Input
        fluid
        name="content"
        // label={<Button icon="add" />}
        labelPosition="right"
        placeholder="메세지를 작성하세요"
        value={content}
        onChange={handleChange}
      />
      <Button.Group icon widths="2">
        <Button
          content="메세지 보내기"
          color="orange"
          icon="edit"
          labelPosition="left"
          onClick={handleClick}
        />
        <Button
          content="이미지 보내기"
          color="teal"
          icon="cloud upload"
          labelPosition="right"
          onClick={openModal}
        />
      </Button.Group>
    </Segment>
  );
};

export default MessageInput;
