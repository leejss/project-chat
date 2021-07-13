import React from "react";
import type { FC } from "react";
import { Dropdown, Grid, Header, Icon, Image, Menu } from "semantic-ui-react";
import { IUser } from "../../../types";
import firebase from "../../../firebase";

type UserPanelProps = {
  user?: IUser;
};

const UserPanel: FC<UserPanelProps> = ({ user }) => {
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Logout");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Menu.Item>
      {/* Site Nmae */}
      <Header>
        <Icon name="at" />
        <Header.Content>Project Chat</Header.Content>
      </Header>
      {/* User Info */}
      <Header>
        <Dropdown
          trigger={
            <span>
              <Image
                src="https://gravatar.com/avatar/8886ce1d7ccccc41849ffbe6336b6608?s=400&d=identicon&r=x"
                avatar
                spaced="right"
              />
              User
            </span>
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item text="User" disabled />
            <Dropdown.Item text="Change Avatar" />
            <Dropdown.Item text="Log out" onClick={onLogout} />
          </Dropdown.Menu>
        </Dropdown>
      </Header>
    </Menu.Item>
  );
};

export default UserPanel;
