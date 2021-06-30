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
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  media: {
    width: "50%",
    height: "400px",
  },
  content: { width: "40%" },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    overflow: "hidden",
  },
}));

const TrendCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            a
          </Avatar>
        }
        title="asdasdasdasd"
      />
      <Grid className={classes.container} container>
        <CardMedia
          className={classes.media}
          image={"https://source.unsplash.com/random/300"}
          title="asdasdasdasd"
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis neque fugit enim possimus, ad, aut voluptate consequuntur
            earum adipisci iste sunt necessitatibus nobis exercitationem
            repellat. Esse quo maxime quis! Saepe mollitia adipisci cum, omnis
            quas velit recusandae doloribus. Maxime illo dolorum doloribus et?
            Repellat reiciendis optio exercitationem praesentium et sunt
            obcaecati enim. Quae et temporibus necessitatibus aperiam. At.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to likes">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="add to dislikes">
            <ThumbDownIcon />
          </IconButton>
        </CardActions>
      </Grid>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(TrendCard);
