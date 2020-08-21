import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  ButtonProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secondaryOutlinedButton: {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,

      "&:hover": {
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.light,
      },
    },
    primaryOutlinedButton: {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
    },
    primaryContainedButton: {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    },
    secondaryContainedButton: {
      color: theme.palette.primary.dark,
      borderColor: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
      },
    },
    primaryTextButton: {
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
    secondaryTextButton: {
      color: theme.palette.secondary.main,

      "&:hover": {
        color: theme.palette.secondary.dark,
      },
    },
  })
);
interface PropTypes extends ButtonProps {
  text: string;
  mode?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  component?: any;
  to?: string;
}
export default function CustomButton(props: PropTypes) {
  const classes = useStyles();
  let buttonClass = classes.primaryContainedButton;
  let variant: "contained" | "outlined" | "text" = "contained";
  if (props.variant === "outlined") {
    variant = "outlined";
    if (props.mode === "primary") {
      buttonClass = classes.primaryOutlinedButton;
    } else if (props.mode === "secondary") {
      buttonClass = classes.secondaryOutlinedButton;
    } else buttonClass = classes.primaryOutlinedButton;
  } else if (props.variant === "contained") {
    variant = "contained";
    if (props.mode === "primary") {
      buttonClass = classes.primaryContainedButton;
    } else if (props.mode === "secondary") {
      buttonClass = classes.secondaryContainedButton;
    } else buttonClass = classes.primaryContainedButton;
  } else if (props.variant === "text") {
    variant = "text";
    if (props.mode === "primary") {
      buttonClass = classes.primaryTextButton;
    } else if (props.mode === "secondary") {
      buttonClass = classes.secondaryTextButton;
    } else buttonClass = classes.primaryTextButton;
  }

  return (
    <Button
      {...props}
      variant={variant}
      className={buttonClass + " " + props.className}
    >
      {props.text}
    </Button>
  );
}
