import React,{useState} from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
function SettingMenu(props) {
    const {showArchivedHandler} = props;
    const [anchorEl, setAnchorEl] = useState(null);
    //open setting menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    //close setting menu
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <>
        <Tooltip title="Setting">
            <IconButton aria-label="Setting"  onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
        </Tooltip>
        <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem  onClick={showArchivedHandler}>
                Archived
            </MenuItem>
            <MenuItem  >
                Setting
            </MenuItem>
            <MenuItem  >
                Log Out
            </MenuItem>
        </Menu>
        </>
    )
}
export default SettingMenu;