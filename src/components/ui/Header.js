import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
const Header = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appbar}>
        <Toolbar className={classes.toolbar} color="primary">
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            style={{ fontWeight: 700 }}
            noWrap
            className={classes.toolbarTitle}
          >
            <Button className={classes.logoContainer} disableRipple>
              <img
                alt="I C A F"
                className={classes.logo}
                src="https://i.ibb.co/7N51p43/logo.png"
              />
            </Button>
          </Typography>
          <GoogleLogin
            render={(renderProps) => (
                <Button
                onClick={renderProps.onClick}
                variant="contained"
                size="small"
                color="secondary"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
              >
                Sign in
              </Button>
            )}
            clientId="361577374258-ljid0kudbrvdkmj6dhnfk56gtlap9kvh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={props.responseSuccessGoogle}
            onFailure={props.responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
         
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button onClick={props.protect} variant="contained">Click Here</Button>
      <Typography variant="h1">{props.err}</Typography>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.6em",
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  button: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 600,
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  appbar: {
    //remove below line only effect drawer
    zIndex: theme.zIndex.modal + 1,
  },
}));
export default Header;
