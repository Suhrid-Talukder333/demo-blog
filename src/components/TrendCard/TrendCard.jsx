import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { connect } from "react-redux";
import { postLiked, postDisliked } from "../../redux/mainReducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85vw",
    height: "500px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(0 0 0 /10%)",
    },
    padding: "10px 10px",
  },
  outerContainer: {
    width: "80%",
    height: "90%",
  },
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  media: {
    width: "50%",
    height: "400px",
  },
  content: { width: "30%", height: "90%" },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    height: "90%",
    overflowWrap: "break-word",
    overflow: "hidden",
  },
}));

const TrendCard = ({ item, state, liked, disliked }) => {
  const { userId, body, id, title } = item;
  const classes = useStyles();

  const history = useHistory();
  const handlePost = () => {
    let path = `/post/${item.id}`;
    history.push(path);
  };

  const handleLiked = (e) => {
    // let newLiked = [...state.liked[state.user.email], item.id];
    let newLiked = [...state.liked[state.user.email]];
    if (newLiked.includes(item.id)) {
      newLiked = newLiked.filter((entry) => entry != item.id);
    } else {
      newLiked = [...newLiked, item.id];
    }
    let newDisliked = [...state.disliked[state.user.email]];
    newDisliked = newDisliked.filter((entry) => entry != item.id);
    liked({ ...state.liked, [state.user.email]: newLiked });
    disliked({ ...state.disliked, [state.user.email]: newDisliked });
  };
  const handleDisliked = (e) => {
    let newLiked = [...state.liked[state.user.email]];
    // let newDisliked = [...state.disliked[state.user.email], item.id];
    let newDisliked = [...state.disliked[state.user.email]];
    if (newDisliked.includes(item.id)) {
      newDisliked = newDisliked.filter((entry) => entry != item.id);
    } else {
      newDisliked = [...newDisliked, item.id];
    }
    newLiked = newLiked.filter((entry) => entry != item.id);
    liked({ ...state.liked, [state.user.email]: newLiked });
    disliked({ ...state.disliked, [state.user.email]: newDisliked });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        onClick={handlePost}
        style={{ textTransform: "capitalize", fontWeight: "bold" }}
        avatar={
          <Avatar aria-label="profile" className={classes.avatar}>
            {state.users[userId - 1].name[0].toUpperCase()}
          </Avatar>
        }
        title={title}
      />
      <Grid className={classes.container} container>
        <CardMedia
          onClick={handlePost}
          className={classes.media}
          image={"https://source.unsplash.com/random/" + `${item.id}`}
          title={title}
        />
        <CardContent className={classes.content} onClick={handlePost}>
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
        </CardActions>
      </Grid>
    </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrendCard);
