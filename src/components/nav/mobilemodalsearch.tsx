import React, { Fragment, useState } from "react";
import {
  Backdrop,
  makeStyles,
  Theme,
  createStyles,
  InputBase,
  Portal,
  IconButton,
  Select,
  InputLabel,
  Input,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      zIndex: 1,
    },
    search: {
      zIndex: 2,
      backgroundColor: theme.palette.background.paper,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "64px",
    },
    input: {
      padding: theme.spacing(0, 2),
      borderRight: "1px solid rgba(0,0,0,0.1)",
    },
    searchSelect: {},
    formControl: {
      minWidth: 120,
      margin: theme.spacing(0, 5),
    },
  })
);
const MobileModalSearch = (props: {
  isOpen: boolean;
  children: React.ReactElement;
  searchRef: React.RefObject<HTMLDivElement>;
  close: () => void;
}) => {
  const categories = [
    "test",
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
  ];
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
        marginTop: "40px",
      },
    },
  };
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  const [categorySelected, setCategory] = useState<string | null>(null);
  const classes = useStyles();
  console.log("MobileModalSearch");
  return (
    <Portal container={props.searchRef.current}>
      <Fragment>
        <InputBase
          className={classes.search}
          placeholder="Search…"
          fullWidth
          classes={{
            input: classes.input,
          }}
          inputProps={{ "aria-label": "search" }}
          startAdornment={
            <Fragment>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="categoryLabel">Categories</InputLabel>
                <Select
                  className={classes.searchSelect}
                  labelId="categoryLabel"
                  inputProps={{
                    name: "categories",
                    id: "categoryLabel",
                  }}
                  id="demo-mutiple-name"
                  value={categorySelected}
                  onChange={handleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {categories.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Fragment>
          }
          endAdornment={
            <IconButton onClick={props.close}>
              <Close />
            </IconButton>
          }
        />

        <Backdrop
          className={classes.modal}
          open={props.isOpen}
          onClick={props.close}
        ></Backdrop>
      </Fragment>
    </Portal>
  );
};

export default MobileModalSearch;
