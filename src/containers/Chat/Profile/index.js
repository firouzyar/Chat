import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import { zoomIn,slideInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const useStyles = makeStyles((theme) => ({
    root: {
        height:"100%",
        background:"#eee",
    },
    header:{
        background:"#0bc1ea",
        color:"#fff",
        display: "flex",
        alignItems: "center",
        padding:" 15px",
    },
    backIcon:{
        color:"#fff",
        marginRight:"10px",
    },
    ImageContainer:{
        display:"flex",
        justifyContent:"center",
        padding:"30px 15px",
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    infoContainer:{
        background:"#fff",
        margin:"15px 0",
        padding:"15px",
        display:"flex",
        flexDirection:"column",
        "& p":{
            margin:"15px 0 0 0",
            fontSize:"20px",
            color:"#949494",
        },
        "& span":{
            color:"#0bc1ea",
            fontSize:"14px"
        }
    }

}));

const styles = {
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
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <header className={classes.header}>
                <IconButton  className={classes.backIcon} onClick={backHandler}>
                    <ArrowBackIcon/>
                </IconButton>
                <h1>Profile</h1>
            </header>
            <div className={classes.ImageContainer}>
                <StyleRoot >
                    <div style={styles.zoomIn}>
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
                    <div style={styles.slideInDown}>
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