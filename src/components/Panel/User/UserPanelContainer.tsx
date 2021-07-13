import React from "react";
import type { FC } from "react";
import UserPanel from "./UserPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

const UserPanelContainer: FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  if (currentUser) {
    return <UserPanel currentUser={currentUser} />;
  }
  return <h1>No User</h1>;
};

export default UserPanelContainer;
