import React from "react";

import {
  Hidden,
  Drawer,
  Divider,
  createStyles,
  Theme,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomButton from "../shared/Button";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
    },
    toolbar: {
      width: "100%",
    },
    drawer: {
      width: "50%",
      backgroundColor: "red",
      zIndex: 0,
    },
    drawerPaper: {
      width: "50%",
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
      marginTop: "20px",
      width: "100px",
      height: "100px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    tabContainer: {
      width: "100%",
      position: "absolute",
    },
    navButtonSignUp: {
      marginLeft: "1%",
      textTransform: "none",
      fontSize: "1rem",
      marginRight: "2%",
      marginTop: "10px",
    },
    navButtonSignIn: {
      marginLeft: "1%",
      textTransform: "none",
      marginRight: "2%",
      fontSize: "1rem",
      marginBottom: "10px",
    },
  })
);
const MobileDrawer = (props: {
  drawerOpen: boolean;
  handleDrawerToggle: VoidFunction;
  Links: React.ReactElement;
}) => {
  const classes = useStyles();
  console.log("mobile drawer");

  return (
    <Hidden smUp implementation="css">
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={props.drawerOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Avatar className={classes.avatar} />
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
            variant="text"
            mode="primary"
            text="Sign In"
            component={Link}
            to="/signin"
          />
          <Divider />
          <div>
            <div className={classes.toolbar} />
            {props.Links}
            <Divider />
          </div>
        </Drawer>
      </nav>
    </Hidden>
  );
};

export default MobileDrawer;
