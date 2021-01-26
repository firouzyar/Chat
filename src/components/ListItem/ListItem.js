import React,{useState} from "react";
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {TimeChecker} from "../../ustils/globalUtils";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    moreOption:{
        display:"flex",
        flexDirection:"column",
        "& div":{
            display:"flex",
            justifyContent:"flex-end",
            flex:"1",
        },
        "& p":{
            margin:"5px 0 0 0",
            fontSize:"14px",
            color: "#bdbaba",
            fontStyle:"italic",
        }
    }
}));

function Items ({data,showMessage}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
  
     
    return(
        <ListItem button component="div" onClick={()=>showMessage(data)}>
            <ListItemAvatar>
                <Avatar  className={classes.avatar} src={data.picture} alt={data.title} className={classes.large}/> 
            </ListItemAvatar>
            <ListItemText primary={data.title} secondary={data.lastSenderName ? `${data.lastSenderName} : ${data.previewText}` : data.previewText } />
            <div className={classes.moreOption}>
                <div>
                {data.muted &&
                    <IconButton aria-label="mute" size="small">
                        <VolumeOffIcon />
                    </IconButton>
                }
                <IconButton aria-label="setting" onClick={handleClick} size="small">
                    <ExpandMoreIcon />
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
                
                </div>
                <p>{TimeChecker(data.time)}</p>
            </div>
        </ListItem>
    )
}
export default Items;