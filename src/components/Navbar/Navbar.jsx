import React from "react";
import {
  Typography,
  Grid,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#4E878C",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    margin: "0px 5px",
    fontSize: "11px",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Grid container className={classes.container}>
          <Grid item xs={8} className={classes.container}>
            <Typography style={{ fontSize: "2rem" }} align="center">
              BlogIN
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.container}>
            <Button className={classes.buttonContainer} variant="outlined">
              SignIn
            </Button>
            <Button className={classes.buttonContainer} variant="outlined">
              SignOut
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
