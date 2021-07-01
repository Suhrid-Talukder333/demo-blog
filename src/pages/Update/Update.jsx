import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, Button } from "@material-ui/core";
import { updatePost } from "../../redux/mainReducer";

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

const Update = ({ state, editPost }) => {
  let { itemid } = useParams();
  itemid = parseInt(itemid);
  console.log(itemid);
  let item;
  state.data.map((entry) => {
    if (entry.id === itemid) {
      item = entry;
    }
  });
  console.log(item);
  const [title, setTitle] = useState(`${item.title}`);
  const [body, setBody] = useState(`${item.body}`);

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "body") {
      setBody(e.target.value);
    }
  };

  const handleUpdate = () => {
    item.body = body;
    item.title = title;
    let newData = state.data.map((entry) => {
      if (entry.id === item.id) {
        entry.body = body;
        entry.title = title;
      }
      return entry;
    });
    state.data = newData;
    console.log(state);
    editPost(state);
    window.location.href = "https://suhrid-blogin.netlify.app//account";
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
            value={title}
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
            value={body}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handleUpdate}
            style={{ width: "100px", marginTop: "20px" }}
            variant="outlined"
            color="primary"
          >
            Update
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
    editPost: (item) => dispatch(updatePost(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
