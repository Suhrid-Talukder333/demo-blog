import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Typography>Hello World</Typography>
      </Container>
    </React.Fragment>
  );
};

export default Home;
