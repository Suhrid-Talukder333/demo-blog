import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Button, Hidden, Grid, Avatar, Card } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExploreIcon from "@material-ui/icons/Explore";
import { connect } from "react-redux";
import { signOut, deletePost } from "../../redux/mainReducer";
import BlogCard from "../../components/BlogCard/BlogCard";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    fontSize: "2rem",
  },
  explore: {
    borderRadius: "5px",
    backgroundColor: "white",
    color: "orange",
    marginLeft: "75vw",
    "&:hover": {
      backgroundColor: "black",
    },
    "@media screen and (max-width:800px)": {
      marginLeft: "40vw",
    },
  },
  item: {
    margin: "10px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    fontSize: "2rem",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 345,
    height: 450,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(0 0 0 /10%)",
    },
  },
  addIcon: {
    fontSize: "100px",
    color: "grey",
    "&:hover": {
      color: "black",
    },
  },
}));

const Account = ({ state, logOut, removePost }) => {
  const [iconClicked, setIconClicked] = useState("profile");
  let currentUserId;
  state.users.map((item) => {
    if (item.name === state.user.name) {
      currentUserId = item.id;
    }
  });
  let userPosts = state.data.filter((item) => item.userId === currentUserId);
  let allItemsId = [
    ...state.liked[state.user.email],
    ...state.disliked[state.user.email],
  ];
  let likedId = [...state.liked[state.user.email]];
  let dislikedId = [...state.disliked[state.user.email]];
  let allItems = state.data.filter((item) => allItemsId.includes(item.id));
  let likedItems = state.data.filter((item) => likedId.includes(item.id));
  let dislikedItems = state.data.filter((item) => dislikedId.includes(item.id));
  let items = [];
  if (iconClicked === "profile") {
    items = allItems;
  } else if (iconClicked === "liked") {
    items = likedItems;
  } else if (iconClicked === "disliked") {
    items = dislikedItems;
  }

  console.log(state);

  const handleLogOut = () => {
    logOut();
    window.location.href = "http://localhost:3000";
  };
  const handleExplore = () => {
    window.location.href = "http://localhost:3000/blogs";
  };
  const handleDelete = (item) => {
    let newData = state.data.filter((entry) => entry.id !== item.id);
    state.data = newData;
    removePost(state);
    window.location.href = "http://localhost:3000/account";
  };

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Button className={classes.logo}>BLOGIN</Button>
          <IconButton className={classes.explore} onClick={handleExplore}>
            <ExploreIcon />
            <Hidden only={["xs"]}>
              <Typography>explore</Typography>
            </Hidden>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            style={
              iconClicked === "profile" ? { backgroundColor: "grey" } : null
            }
            button
            key="Account"
            onClick={() => setIconClicked("profile")}
          >
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem
            style={iconClicked === "liked" ? { backgroundColor: "grey" } : null}
            button
            key="Liked"
            onClick={() => setIconClicked("liked")}
          >
            <ListItemIcon>
              <ThumbUpAltIcon />
            </ListItemIcon>
            <ListItemText primary="Liked" />
          </ListItem>
          <ListItem
            style={
              iconClicked === "disliked" ? { backgroundColor: "grey" } : null
            }
            button
            key="Disliked"
            onClick={() => setIconClicked("disliked")}
          >
            <ListItemIcon>
              <ThumbDownAltIcon />
            </ListItemIcon>
            <ListItemText primary="Disliked" />
          </ListItem>
        </List>
        <Divider />
        <ListItem button onClick={handleLogOut} key="LogOut">
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItem>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {iconClicked === "profile" ? (
          <Grid
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
            container
          >
            <Grid className={classes.container} item>
              <Avatar aria-label="profile" className={classes.avatar}>
                {state.user.name[0].toUpperCase()}
              </Avatar>
              <Typography style={{ marginLeft: "25px" }} variant="h2">
                {state.user.name}
              </Typography>
            </Grid>
            <Grid className={classes.container} item>
              <Typography style={{ margin: "10px 0" }} variant="h5">
                {state.user.email}
              </Typography>
            </Grid>
            <Grid item>
              <Card
                className={classes.card}
                onClick={() => {
                  window.location.href = "http://localhost:3000/create";
                }}
              >
                <ControlPointIcon className={classes.addIcon} />
              </Card>
            </Grid>
            <Typography style={{ margin: "10px 0" }} variant="h2">
              MY POSTS
            </Typography>
            <Grid container>
              {userPosts.map((item) => (
                <Grid key={item.id} className={classes.item} item>
                  <BlogCard item={item} />
                  <Button
                    onClick={() => {
                      window.location.href =
                        "http://localhost:3000/edit/" + `${item.id}`;
                    }}
                    style={{ margin: "10px" }}
                    variant="contained"
                  >
                    edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(item)}
                    style={{ margin: "10px", backgroundColor: "red" }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Divider />
            <Typography style={{ margin: "10px 10px" }} variant="h2">
              OTHERS
            </Typography>
            <Divider />
          </Grid>
        ) : null}
        <Grid container>
          {items.map((item) => (
            <Grid key={item.id} className={classes.item} item>
              <BlogCard item={item} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
    removePost: (item) => dispatch(deletePost(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
