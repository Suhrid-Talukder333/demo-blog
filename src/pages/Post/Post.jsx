import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import {
  Grid,
  makeStyles,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { postLiked, postDisliked } from "../../redux/mainReducer";

const useStyles = makeStyles({
  container: {
    width: "80vw",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
  },
  media: {
    width: "80vw",
    height: "60vh",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "20px auto",
  },
  body: {
    fontSize: "16px",
    margin: "10px auto",
  },
});

const Post = ({ state, liked, disliked }) => {
  const classes = useStyles();
  let { id } = useParams();
  id = parseInt(id);

  let item = {};
  state.data.map((entry) => {
    if (entry.id === id) {
      item = entry;
    }
  });
  console.log(item);

  const handleLiked = (e) => {
    let newLiked = [...state.liked[state.user.email], item.id];
    let newDisliked = [...state.disliked[state.user.email]];
    newDisliked = newDisliked.filter((entry) => entry != item.id);
    liked({ ...state.liked, [state.user.email]: newLiked });
    disliked({ ...state.disliked, [state.user.email]: newDisliked });
  };
  const handleDisliked = (e) => {
    let newLiked = [...state.liked[state.user.email]];
    let newDisliked = [...state.disliked[state.user.email], item.id];
    newLiked = newLiked.filter((entry) => entry != item.id);
    liked({ ...state.liked, [state.user.email]: newLiked });
    disliked({ ...state.disliked, [state.user.email]: newDisliked });
  };

  return (
    <Grid container>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item>
          <CardMedia
            className={classes.media}
            title={item.title}
            image={"https://source.unsplash.com/random/" + `${item.id}`}
          />
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            variant="body2"
            color="textPrimary"
            component="h2"
          >
            {item.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.body}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {item.body}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="add to likes" onClick={handleLiked}>
            <ThumbUpIcon
              style={
                state.liked[state.user.email].includes(item.id) === true
                  ? { color: "blue" }
                  : { color: "grey" }
              }
            />
          </IconButton>
          <IconButton aria-label="add to dislikes" onClick={handleDisliked}>
            <ThumbDownIcon
              style={
                state.disliked[state.user.email].includes(item.id) === true
                  ? { color: "red" }
                  : { color: "grey" }
              }
            />
          </IconButton>
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
    liked: (item) => dispatch(postLiked(item)),
    disliked: (item) => dispatch(postDisliked(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
