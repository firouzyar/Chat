import React from "react";

import Avatar from '@material-ui/core/Avatar';
import { zoomIn,slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {useStyles} from './style.js';
import {Header} from "../../../components/Header/Header";

const animationStyles = {
    zoomIn: {
        animationDelay:"100ms",
        animationDuration: '1.2s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    },
    slideInDown: {
        animationDelay:"100ms",
        animationDuration: '1.2s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    }
} 

function Profile(props) {
    const {backHandler,profile} = props;
    const classes = useStyles(props);
    return(
        <div className={classes.root}>
            <Header title="Profile" backHandler={backHandler}/>
            <div className={classes.ImageContainer}>
                <StyleRoot >
                    <div style={animationStyles.zoomIn}>
                    <Avatar  
                        src={profile.picture} 
                        alt={profile.fistName} 
                        className={classes.large} 
                    />
                    </div>
                </StyleRoot>
            </div>
            <div >
                <StyleRoot >
                    <div style={animationStyles.slideInDown}>
                        <div className={classes.infoContainer}>
                            <span>Your Name</span>
                            <p>
                                {`${profile.fistName} ${profile.lastName}`}
                            </p>
                        </div>
                        <div className={classes.infoContainer}>
                            <span>About</span>
                            <p>
                                {profile.about}
                            </p>
                        </div>
                    </div>
                </StyleRoot>
            </div>
        </div>
    )
}

export default Profile;