import React from "react";
import type { FC } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { IUser } from "../../../types";

type DirectPanelProps = {
  users: IUser[];
};

const DirectPanel: FC<DirectPanelProps> = ({ users }) => {
  return (
    <Menu.Menu>
      <Menu.Header>
        <span>
          <Icon name="mail" />
          Direct Messages
        </span>{" "}
        {`(${users.length})`}
      </Menu.Header>
      {users.map((user) => (
        <Menu.Item key={user.name} onClick={() => console.log(user)}>
          <Icon name="circle" color="orange" />
          {user.name}
        </Menu.Item>
      ))}
    </Menu.Menu>
  );
};

export default DirectPanel;
