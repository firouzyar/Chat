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
import moment from "moment";
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

function Items ({data}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
  
      function TimeChecker(time){
          let REFERENCE = moment(); 
  
          let TODAY = REFERENCE.clone().startOf('day');
          let A_WEEK_OLD = REFERENCE.clone().subtract(7, 'days').startOf('day');
          let result =""
          if(moment(time).isSame(TODAY, 'd')){
              result= time.substr(11)
          }
          else if(moment(time).isAfter(A_WEEK_OLD)){
              result= moment().format('dddd');
          }
          else{
              result= time.substr(1,10)
          }
          return result;
    }
    return(
        <ListItem button component="div">
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