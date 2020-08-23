import React from "react";
import {
  IconButton,
  Badge,
  withStyles,
  createStyles,
  Theme,
  Menu,
  MenuProps,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, Work, BeachAccess, Image } from "@material-ui/icons";
import CustomButton from "../shared/Button";

const CustomBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 10,
      top: 5,

      fontSize: "12px",
    },
  })
)(Badge);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    position: "absolute",
    width: "50%",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const Cart = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("cart");
  return (
    <div>
      <CustomBadge badgeContent={1} color="primary">
        <IconButton onClick={handleClick} color="secondary">
          <ShoppingCart fontSize="small" />
        </IconButton>
      </CustomBadge>{" "}
      <StyledMenu
        keepMounted
        onClose={handleClose}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="99,99$" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="49.99$" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccess />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="33.99" />
          </ListItem>
        </List>
        <Typography
          style={{ textAlign: "center", width: "100%" }}
          variant="h6"
          children="29 more items"
        />
        <Divider variant="fullWidth" />
        <CustomButton
          style={{
            width: "90% ",
            marginTop: "20px",
            marginLeft: "5%",
          }}
          variant="outlined"
          text="Go To Cart"
          mode="secondary"
        />
      </StyledMenu>
    </div>
  );
};

export default Cart;
