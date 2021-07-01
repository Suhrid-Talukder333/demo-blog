import React, { useState, createRef } from "react";
import { connect } from "react-redux";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, Button } from "@material-ui/core";
import { createPost } from "../../redux/mainReducer";

const useStyles = makeStyles({
  container: {
    margin: "10vh 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleInput: {
    width: "50vw",
    margin: "30px auto",
    fontSize: "2rem",
    "@media screen and (max-width:800px)": {
      width: "80vw",
    },
  },
  bodyInput: {
    width: "80vw",
    margin: "30px auto",
    fontSize: "2rem",
  },
});

const Create = ({ state, addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let id = state.data.length + 1;
  let userId;
  state.users.map((user) => {
    if (user.name === state.user.name) {
      userId = user.id;
    }
  });

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "body") {
      setBody(e.target.value);
    }
  };
  const handlePost = () => {
    const newPost = {
      title,
      body,
      id,
      userId,
    };
    addPost(newPost);
    window.location.href = "https://suhrid-blogin.netlify.app/account";
  };

  const classes = useStyles();
  return (
    <Grid container>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item>
          <Typography variant="h4">Title</Typography>
          <TextField
            className={classes.titleInput}
            id="title"
            label="title"
            variant="outlined"
            onChange={handleChange}
            multiline
          />
          <Typography variant="h4">body</Typography>
          <TextField
            multiline
            className={classes.bodyInput}
            id="body"
            label="body"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handlePost}
            style={{ width: "100px", marginTop: "20px" }}
            variant="outlined"
            color="primary"
          >
            POST
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (item) => dispatch(createPost(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
