import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  makeStyles,
  createStyles,
  Theme,
  Toolbar,
  Button,
  Tabs,
  Tab,
  fade,
  Hidden,
} from "@material-ui/core";
import CustomButton from "../shared/Button";
import { Link } from "react-router-dom";
import logo from "../../ui/assets/images/navlogo.png";
import Mobilenav from "./mobilenav";
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
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },

      [theme.breakpoints.down("sm")]: {
        marginLeft: "50px",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      [theme.breakpoints.down("sm")]: {},
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("md")]: {
        width: "20ch",
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
      // display: "flex",
      // justifyContent: "space-around",
      textAlign: "left",
    },
    tab: {
      textTransform: "none",
      minWidth: "80px",
      marginLeft: 0,
      padding: 10,

      fontSize: "1rem",

      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },

    appLogo: {
      marginLeft: 0,
      padding: 0,
      [theme.breakpoints.down("sm")]: {
        minWidth: "200px",
      },
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
      marginLeft: "auto",
      textTransform: "none",
      fontSize: "1rem",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        display: "none",
      },
    },
    navButtonSignIn: {
      marginLeft: "1%",
      textTransform: "none",
      marginRight: "2%",
      fontSize: "1rem",
      borderRadius: "50px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        display: "none",
      },
    },
  })
);
interface classTypes {
  appBar: String;
}
export default function NavBar() {
  const [navIndex, setNavIndex] = useState<number | boolean>(0);
  const classes = useStyles();
  const searchRef = useRef<HTMLDivElement | null>(null);
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
      default:
        setNavIndex(false);
        break;
    }
  }, [navIndex]);
  const tabs = [
    <Tab
      className={classes.tab}
      disableRipple
      component={Link}
      to="/"
      label="Home"
      key="0"
    />,
    <Tab
      className={classes.tab}
      disableRipple
      component={Link}
      to="/stores"
      label="Browse"
      key="1"
    />,
  ];
  const mobileTabs = (
    <Tabs
      value={navIndex}
      indicatorColor="primary"
      className={classes.tabContainer}
      orientation="vertical"
      TabIndicatorProps={{ style: { width: "10px" } }}
      onChange={changeNavIndex}
    >
      {tabs}
    </Tabs>
  );
  const desktopTabs = (
    <Tabs
      value={navIndex}
      TabIndicatorProps={{ hidden: true }}
      className={classes.tabContainer}
      orientation="horizontal"
      onChange={changeNavIndex}
    >
      {tabs}
    </Tabs>
  );
  console.log("navbar");

  return (
    <header>
      <div ref={searchRef}></div>
      <AppBar className={classes.appBar}>
        <Toolbar disableGutters className={classes.ToolBar}>
          <Button
            className={classes.appLogo}
            to="/"
            component={Link}
            onClick={() => setNavIndex(0)}
          >
            <img src={logo} alt="need now logo" />
          </Button>
          <Hidden smDown>
            {desktopTabs}
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
          </Hidden>
          <Hidden mdUp>
            <Mobilenav searchRef={searchRef} drawerLinks={mobileTabs} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </header>
  );
}
