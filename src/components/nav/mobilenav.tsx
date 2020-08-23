import React, { Fragment, useState } from "react";
import { Search, Menu } from "@material-ui/icons";
import {
  makeStyles,
  Theme,
  createStyles,
  InputBase,
  IconButton,
} from "@material-ui/core";
import MobileModalSearch from "./mobilemodalsearch";
import Cart from "./cart";
import MobileDrawer from "./mobileDrawer";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flex: 1,
    },

    MenuHamburger: {
      display: "inherit",
    },
    inputRoot: {
      [theme.breakpoints.down("sm")]: {
        color: "inherit",
        boxSizing: "content-box",
        display: "inherit",
      },
    },
    searchWrapper: {
      marginLeft: "100px",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),

      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
    },
  })
);
console.log("mobilenav");
const Mobilenav = (props: {
  drawerLinks: React.ReactElement;
  searchRef: React.RefObject<HTMLDivElement>;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const classes = useStyles();
  const ToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  let mobileNavigation = (
    <Fragment>
      {modalOpen ? (
        <MobileModalSearch
          searchRef={props.searchRef}
          close={() => {
            setModalOpen(false);
          }}
          isOpen={modalOpen}
        >
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </MobileModalSearch>
      ) : null}

      <MobileDrawer
        Links={props.drawerLinks}
        drawerOpen={drawerOpen}
        handleDrawerToggle={() => {
          setDrawerOpen(false);
        }}
      />

      <div className={classes.grow} />
      <div className={classes.searchWrapper}>
        <div className={classes.grow} />
        <IconButton
          onClick={(e: React.MouseEvent) => setModalOpen(true)}
          color="primary"
          children={<Search color="secondary" />}
        />
      </div>
      <Cart />

      <IconButton onClick={ToggleDrawer}>
        <Menu color="secondary" className={classes.MenuHamburger} />
      </IconButton>
    </Fragment>
  );
  return mobileNavigation;
};

export default Mobilenav;
