import React, { useState } from "react";
import { signIn, signUp } from "../../redux/mainReducer";
import { connect } from "react-redux";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Box,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpen";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        BlogIN
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

function SignIn({ state, userSignIn, userSignUp, history }) {
  const [credentials, setCredentials] = useState({ name: "", email: "" });

  //save state with respect to input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
    console.log(credentials);
  };

  //utility
  const classes = useStyles();

  //login and sign in submition handlers
  const handleSignIn = () => {
    let found = false;
    state.users.map((user) => {
      if (user.name == credentials.name) {
        userSignIn(credentials);
        found = true;
        window.location.href = "https://suhrid-blogin.netlify.app/blogs";
      }
    });
    if (found === false) {
      alert("User Not Found");
    }
  };
  const handleSignUp = () => {
    let found = false;
    state.users.map((user) => {
      if (user.name == credentials.name) {
        found = true;
      }
    });
    if (!found) {
      userSignUp(credentials);
      userSignIn(credentials);
      window.location.href = "https://suhrid-blogin.netlify.app/blogs";
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignIn: (item) => dispatch(signIn(item)),
    userSignUp: (item) => dispatch(signUp(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
