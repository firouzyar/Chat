import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    loaderContainer: {
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    },
}));
export const Loader = (props) =>{
    const classes = useStyles();
    return(
        <div className={classes.loaderContainer}><CircularProgress /></div>
    )
}
