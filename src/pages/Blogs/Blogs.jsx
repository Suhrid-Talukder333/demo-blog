import React, { useState } from "react";
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
  const { data } = state;
  const [searched, setSearched] = useState(false);
  const [newData, setNewData] = useState(data);
  const handleSearchChange = (e) => {
    if (e.target.value === "" && searched === true) {
      setSearched(false);
    } else if (searched === false) {
      setSearched(true);
    }
    setNewData(
      data.filter(
        (item) =>
          item.body.toLowerCase().search(e.target.value.toLowerCase()) != -1 ||
          item.title.toLowerCase().search(e.target.value.toLowerCase()) != -1
      )
    );
  };

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
          onChange={handleSearchChange}
        />
      </Grid>
      {searched === false ? (
        <Grid container>
          <Typography variant="h2" className={classes.trend_text}>
            TRENDING
          </Typography>
          <Grid className={classes.trending} container>
            <TrendCard item={state.data[state.data.length - 1]} />
          </Grid>
        </Grid>
      ) : null}
      <Grid className={classes.container} container>
        {newData.map((item) => (
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
