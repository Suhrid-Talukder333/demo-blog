import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";
import TrendCard from "../../components/TrendCard/TrendCard";
import { Grid, Typography, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  trending: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0px",
    flexWrap: "wrap",
  },
  trend_text: {
    width: "85vw",
    textAlign: "left",
    margin: "10px auto",
    fontSize: "3rem",
    fontWeight: "bolder",
  },
  blogs: {
    margin: "20px 35px",
  },
});

const Blogs = ({ state }) => {
  const classes = useStyles();
  console.log(state);
  return (
    <React.Fragment>
      <Navbar />
      <Grid className={classes.container} container>
        <TextField
          style={{ width: "50vw" }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
      </Grid>
      <Typography variant="h2" className={classes.trend_text}>
        TRENDING
      </Typography>
      <Grid className={classes.trending} container>
        <TrendCard />
      </Grid>
      <Grid className={classes.container} container>
        {state.data.map((item) => (
          <Grid key={item.id} className={classes.blogs} item>
            <BlogCard item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

const mapStateToPros = (state) => {
  return { state };
};

const mapDispatchToProps = null;

export default connect(mapStateToPros, mapDispatchToProps)(Blogs);
