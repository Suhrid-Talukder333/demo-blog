import React, { useState } from "react";
import { connect } from "react-redux";
import { signOut } from "../../redux/mainReducer";
import {
  Typography,
  Grid,
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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

const Navbar = ({ state, logOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    logOut();
    window.location.href = "http://localhost:3000";
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          {state.isLoggedIn === false ? (
            <Grid item xs={4} className={classes.container}>
              <Button
                href="/signin"
                className={classes.buttonContainer}
                variant="outlined"
              >
                SignIn
              </Button>
              {/* <Button
              href="/signin"
              className={classes.buttonContainer}
              variant="outlined"
            >
              SignOut
            </Button> */}
            </Grid>
          ) : (
            <Grid item>
              <Button style={{ color: "white" }}>
                <AccountCircleIcon
                  style={{ width: "2rem", height: "2rem" }}
                  onClick={handleClick}
                />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Posts</MenuItem>
                <MenuItem onClick={handleClose}>Liked Post</MenuItem>
                <MenuItem onClick={handleClose}>Disliked Post</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
