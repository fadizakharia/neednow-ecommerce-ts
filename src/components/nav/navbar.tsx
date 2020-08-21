import React, { useState, useEffect } from "react";
import {
  AppBar,
  makeStyles,
  createStyles,
  Theme,
  Toolbar,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import CustomButton from "../shared/Button";

import { Link } from "react-router-dom";
import logo from "../../ui/assets/images/navlogo.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      padding: 0,
      margin: 0,
      position: "static",
      color: theme.palette.secondary.main,
      backgroundColor: "black",
      maxHeight: "64px",
      height: "64px",
      [theme.breakpoints.down("xs")]: {
        maxHeight: "64px",
        height: "64px",
      },
    },
    ToolBar: {
      maxHeight: "64px",
      height: "64px",
      [theme.breakpoints.down("xs")]: {
        maxHeight: "64px",
        height: "64px",
      },
    },
    tabContainer: {
      marginLeft: "2%",
      display: "flex",
      justifyContent: "space-around",
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    tab: {
      textTransform: "none",
      minWidth: 110,
      marginLeft: 0,
      padding: 0,
      fontSize: "1rem",
      textAlign: "left",
    },
    appLogo: {
      marginLeft: 0,
      padding: 0,
    },
    appLogoInitial: {
      color: theme.palette.primary.light,
      fontFamily: "Cursive",
      fontWeight: "lighter",
    },
    menuIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navButtonSignUp: {
      marginLeft: "1%",
      textTransform: "none",
      fontSize: "1rem",
    },
    navButtonSignIn: {
      marginLeft: "1%",
      textTransform: "none",
      marginRight: "2%",
      fontSize: "1rem",
      borderRadius: "50px",
    },
  })
);
interface classTypes {
  appBar: String;
}
export default function NavBar() {
  const [navIndex, setNavIndex] = useState<number | boolean>(0);
  const classes = useStyles();
  function changeNavIndex(Event: React.ChangeEvent<{}>, value: number) {
    setNavIndex(value);
  }
  useEffect(() => {
    switch (window.location.pathname) {
      case "":
        setNavIndex(0);
        break;
      case "/":
        setNavIndex(0);
        break;
      case "/stores":
        setNavIndex(1);
        break;
      case "/seller":
        setNavIndex(2);
        break;
      default:
        setNavIndex(-1);
        break;
    }
  }, [navIndex]);

  return (
    <header>
      <AppBar className={classes.appBar}>
        <Toolbar disableGutters className={classes.ToolBar}>
          {/* <IconButton className={classes.menuIcon}>
            <Menu color="secondary" fontSize="large" />
          </IconButton> */}
          <Button
            className={classes.appLogo}
            to="/"
            component={Link}
            onClick={() => setNavIndex(0)}
          >
            <img src={logo} alt="need now logo" />
          </Button>
          <Tabs
            className={classes.tabContainer}
            variant="standard"
            value={navIndex}
            onChange={changeNavIndex}
            TabIndicatorProps={{
              hidden: true,
            }}
          >
            <Tab
              className={classes.tab}
              disableRipple
              component={Link}
              to="/"
              label="Home"
            />
            <Tab
              className={classes.tab}
              disableRipple
              component={Link}
              to="/stores"
              label="categories"
            />
            <Tab
              className={classes.tab}
              disableRipple
              component={Link}
              to="/seller"
              label="sell now"
            />
          </Tabs>
          <div className={classes.grow} />
          <CustomButton
            className={classes.navButtonSignUp}
            variant="text"
            mode="primary"
            text="Sign Up"
            component={Link}
            to="/signup"
          />
          <CustomButton
            className={classes.navButtonSignIn}
            variant="outlined"
            mode="secondary"
            text="Sign In"
            component={Link}
            to="/signin"
          />
        </Toolbar>
      </AppBar>
    </header>
  );
}
