import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";

const AdminNavbar = ({ className, onMobileNavOpen, ...rest }) => {
  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

AdminNavbar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default AdminNavbar;
