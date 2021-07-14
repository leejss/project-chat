import React from "react";
import type { FC } from "react";
import { Dropdown, Grid, Header, Icon, Image, Menu } from "semantic-ui-react";
import { IUser } from "../../../types";
import firebase from "../../../firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

type UserPanelProps = {
  currentUser: IUser;
};

const UserPanel: FC<UserPanelProps> = ({ currentUser }) => {
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
              <Image src={currentUser.avatar} avatar spaced="right" />
              {currentUser.name}
            </span>
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item text="Change Avatar" />
            <Dropdown.Item text="Log out" onClick={onLogout} />
          </Dropdown.Menu>
        </Dropdown>
      </Header>
    </Menu.Item>
  );
};

export default UserPanel;
