import React from "react";
import type { FC } from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "../Panel/SidePanel";

const Home: FC = () => {
  return (
    <Grid>
      <SidePanel />
      <Grid.Column>{/* <MessagesContainer /> */}</Grid.Column>
    </Grid>
  );
};

export default Home;
