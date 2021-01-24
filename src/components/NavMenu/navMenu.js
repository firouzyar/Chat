import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nav:{
    flexGrow: 1,
    display:"flex",
  },
  navButton:{
      color:"#fff",
      borderColor:"#fff",
      marginRight:"10px"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <nav className={classes.nav}>
            <Button  variant="outlined" color="default" href="/" className={classes.navButton}>Home</Button>
            <Button  variant="outlined" color="default" href="/chat" className={classes.navButton}>Chat</Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}