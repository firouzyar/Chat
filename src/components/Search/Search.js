import React from 'react';
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
            onChange={(event)=> onSearchChange(event)}
            fullWidth={fullWidth}
            margin="dense"
            InputProps={{
                endAdornment: (
                <InputAdornment>
                      <SearchIcon />
                </InputAdornment>
                )
            }}
        />
    )
}
export default Search;