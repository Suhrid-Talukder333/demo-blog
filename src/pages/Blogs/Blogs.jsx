import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

const Blogs = ({ state }) => {
  console.log(state);
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
};

const mapStateToPros = (state) => {
  return { state };
};

const mapDispatchToProps = null;

export default connect(mapStateToPros, mapDispatchToProps)(Blogs);
