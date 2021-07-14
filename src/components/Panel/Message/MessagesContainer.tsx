import React, { MouseEvent, useEffect, useState } from "react";
import type { FC } from "react";
import MessagesHeader from "./MessagesHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { messagesRef } from "../../../database/messages";
import { IMessage } from "../../../types";

const MessagesContainer: FC = () => {
  const currentProject = useSelector(
    (state: RootState) => state.project.currentProject
  );
  const [messages, setMessages] = useState<IMessage[] | []>([]);

  // get message
  useEffect(() => {
    if (currentProject) {
      const currentProjectId = currentProject.id;
      let loaded: any = [];
      messagesRef.child(currentProjectId).on("child_added", (snap) => {
        loaded.push(snap.val());
        setMessages([...loaded]);
      });
    }
  }, [currentProject]);

  return (
    <>
      <MessagesHeader currentProject={currentProject} />
      <Messages messages={messages} />
      <MessageInput />
    </>
  );
};

export default MessagesContainer;
