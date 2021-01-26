import React from "react";
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

export const SendMessage =({sendChat})=>{
    return(
        <form onSubmit={sendChat}>
            <TextField
                variant="outlined"
                id="message"
                placeholder="Send Message"
                fullWidth
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton type="submit">
                            <SendRoundedIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
            />
        </form>
    )
}