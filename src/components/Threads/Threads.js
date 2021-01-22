import React,{useState} from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from "moment"
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    moreOption:{
        marginTop:"10px"
    }
}));
function Threads(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const {threads} =props;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
       <>
        {threads && threads.map((thread,index)=>{
            return(
                <Grid item xs={12} md={4} key={index}>
                    <Card >
                        <CardHeader
                            avatar={
                            <Avatar  className={classes.avatar} src={thread.picture} alt={thread.title} className={classes.large}/>
                            }
                            action={
                                <>
                                    <IconButton aria-label="settings" onClick={handleClick}>
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem  onClick={handleClose}>
                                            Archive chat
                                        </MenuItem>
                                        <MenuItem  onClick={handleClose}>
                                            Delete chat
                                        </MenuItem>
                                        <MenuItem  onClick={handleClose}>
                                            Pin chat
                                        </MenuItem>
                                    </Menu>
                                </>
                            }
                            title={thread.title}
                            subheader={moment(thread.time).startOf('hour').fromNow()}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {thread.lastSenderName ? `${thread.lastSenderName} : ${thread.previewText}` : thread.previewText }
                            </Typography>
                            <div className={classes.moreOption}>
                                {thread.muted ? 
                                    <IconButton aria-label="not mute" size="small">
                                        <VolumeDownIcon />
                                    </IconButton> :
                                    <IconButton aria-label="mute" size="small">
                                        <VolumeOffIcon />
                                    </IconButton>
                                }
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                
            )
        })
        }
    </> 
    )
}
export default Threads;