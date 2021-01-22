import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    searchinput: {
        background: "#fff",
    }
}));
const Search = ({label,onSearchChange,fullWidth})=>{

    const classes = useStyles();
    return(
        <TextField
            label={label}
            variant="outlined"
            className={classes.searchinput}
            onChange={()=> onSearchChange(event)}
            fullWidth={fullWidth}
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
        />
    )
}
export default Search;