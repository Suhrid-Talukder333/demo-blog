import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";

const Navbar = () => {
  return (
    <Grid alignItems="center" justify="center">
      <Typography>BLOGIT</Typography>
      <Grid>
        <Container>
          <Typography>Sign In</Typography>
        </Container>
        <Container>
          <Typography>Sign Up</Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Navbar;
