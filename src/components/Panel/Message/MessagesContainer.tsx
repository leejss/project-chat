import React, { MouseEvent, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import MessagesHeader from "./MessagesHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { messagesRef } from "../../../database/messages";
import { IMessage } from "../../../types";
import { countUsers } from "../../../util/countUsers";
import FileModal from "./FileModal";

const MessagesContainer: FC = () => {
  const currentProject = useSelector(
    (state: RootState) => state.project.currentProject
  );
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [messages, setMessages] = useState<IMessage[] | []>([]);
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

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
      <MessagesHeader
        currentProject={currentProject}
        userCtn={countUsers(messages)}
      />
      <Messages messages={messages} currentUser={currentUser} />
      <MessageInput openModal={openModal} />
      <FileModal open={open} closeModal={closeModal} />
    </>
  );
};

export default MessagesContainer;
