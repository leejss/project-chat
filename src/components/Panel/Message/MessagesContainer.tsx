import React, { MouseEvent } from "react";
import type { FC } from "react";
import MessagesHeader from "./MessagesHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

const MessagesContainer: FC = () => {
  const currentProject = useSelector(
    (state: RootState) => state.project.currentProject
  );



  return (
    <>
      <MessagesHeader currentProject={currentProject} />
      <Messages />
      <MessageInput  />
    </>
  );
};

export default MessagesContainer;
