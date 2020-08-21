import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../ui/assets/images/login.jpg";
import CustomButton from "../shared/Button";

import { Facebook } from "@material-ui/icons";
import GoogleLogo from "../../ui/assets/google-icon.svg";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Typography
        component={"a"}
        color="inherit"
        href="https://material-ui.com/"
      >
        NowNeed
      </Typography>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  textWhite: {},
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(10, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0%",
      backgroundColor: theme.palette.secondary.main,
      paddingTop: "5px",
      borderRadius: "5px",
      color: "black",
    },
  },
  oauthSection: {
    margin: theme.spacing(10, 4),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 4),
      marginTop: "20%",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
    display: "none",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),

    [theme.breakpoints.down("xs")]: {
      backgroundColor: "rgba(255,255,255,1)",
      padding: "20px",
      color: theme.palette.common.black,
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backgroundMobile: {
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${image})`,
    },
  },
  oauthFacebook: {
    backgroundColor: "#5890FF",
    borderRadus: "50px",
    textTransform: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "#5890FF",
    },
  },
  oauthGoogle: {
    backgroundColor: "#fff",
    borderRadus: "50px",
    textTransform: "none",
    marginTop: "20px",
    color: "black",
    width: "100%",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  iconRoot: {
    textAlign: "center",
    padding: 0,
  },
  googleIcon: {
    maxHeight: "40px",
    maxWidth: "40px",
    padding: "10px",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} lg={8} className={classes.image} />
      <Grid
        className={classes.backgroundMobile}
        item
        xs={12}
        sm={8}
        md={5}
        lg={4}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.oauthSection}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.oauthFacebook}
              fullWidth
              startIcon={<Facebook />}
            >
              <p>Continue With Facebook</p>
            </Button>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.oauthGoogle}
                  fullWidth
                  onClick={renderProps.onClick}
                >
                  {
                    <img
                      className={classes.googleIcon}
                      alt="showing a city"
                      src={GoogleLogo}
                    />
                  }
                  <p>Continue With Google</p>
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>
        </div>
        <h3>OR</h3>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              color="primary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              color="primary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              mode="primary"
              className={classes.submit}
              text="sign in"
            />
            <Grid container>
              <Grid item xs>
                <Link to="/password">Forgot password?</Link>
              </Grid>
              <Grid item>
                Don't have an account? <Link to="/signup">{"Sign Up"}</Link>
              </Grid>
            </Grid>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
