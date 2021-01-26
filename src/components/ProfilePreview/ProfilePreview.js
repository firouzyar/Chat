import React from "react";
import {useStyles} from './style.js';
import Avatar from '@material-ui/core/Avatar';
export const ProfilePreview =(props) =>{
    const classes = useStyles();
    const {data} =props;
    return(
        <>
            <Avatar  
                src={data.picture} 
                alt={data.fistName} 
                className={classes.large} 
            />
            <span>{data.title}</span>
        </>
    )
}