import React from "react";
import Button from '@material-ui/core/Button';

function NotFound(props) {
    return(
        <div style={{marginTop:"150px"}}>
           <h1> We couldn't find the page you were looking for</h1>
            <p>Looks like you're looking for a page that doesn't exist. Or a page we might have just deleted. Either way, go back or be sure to check the url, your spelling and try again.</p>
            <Button  variant="contained" color="primary" href="/" >GO TO HOME PAGE</Button>
        </div>
    )
}

export default NotFound;