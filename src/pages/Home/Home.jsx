import React from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import {
  Grid,
  Typography,
  makeStyles,
  CardMedia,
  Button,
} from "@material-ui/core";
import blogImg from "../../assets/blogging.svg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  heroContainer: {
    display: "flex",
    padding: "30px",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width:800px)": {
      justifyContent: "center",
      margin: "12vh auto",
    },
  },
  heroTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "left",
  },
  heroImgContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImg: {
    width: "50vw",
    height: "80vh",
    "@media screen and (max-width:800px)": {
      display: "none",
    },
  },
});

const Home = ({ state }) => {
  const history = useHistory();
  if (state.isLoggedIn == true) {
    history.push("/blogs");
  }
  const classes = useStyles();
  return (
    <Grid container>
      <Navbar />
      <Grid container className={classes.heroContainer}>
        <Grid item className={classes.heroTextContainer}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              maxWidth: "500px",
              margin: "10px 0px",
            }}
          >
            Blog Your Heart Out.
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#65B891", maxWidth: "500px", margin: "10px 0px" }}
          >
            Create your blogs, publish them, update them, remove them to your
            heart's content and show your creativity to the world.
          </Typography>
          <Button
            href={state.isLoggedIn === true ? "/blogs" : "/signin"}
            style={{ maxWidth: "200px", marginTop: "20px" }}
            variant="outlined"
            color="secondary"
          >
            Get Started
          </Button>
        </Grid>
        <Grid item className={classes.heroImgContainer}>
          <CardMedia className={classes.heroImg} image={blogImg} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, null)(Home);
