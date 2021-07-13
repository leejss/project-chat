import React from "react";
import type { FC } from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "../Panel/SidePanel";
import MessagesContainer from "../Panel/Message/MessagesContainer";

const Home: FC = () => {
  return (
    <Grid columns="equal">
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }} width={8}>
        <MessagesContainer />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
