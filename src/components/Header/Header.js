import React from "react";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useStyles} from './style.js';

export const Header = ({backHandler,title})=>{
    const classes = useStyles();
    return(
        <header className={classes.header}>
            <IconButton  className={classes.backIcon} onClick={backHandler}>
                <ArrowBackIcon/>
            </IconButton>
            <h1>{title}</h1>
        </header>
    )
}