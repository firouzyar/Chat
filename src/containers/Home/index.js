import React from "react";
import {toAbsoluteUrl} from "../../ustils/globalUtils";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './style.js';
function Home(props) {
    const classes = useStyles(props);
    return(
        <Grid 
            container 
            spacing={6} 
            className={classes.root} 
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs="7">
                <Typography variant="h5" gutterBottom>
                Simple. Secure.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Reliable messagingr
                </Typography>
                <p>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
                <ul>
                    <li>Android</li>
                    <li>Iphone</li>
                    <li>Mac or Windows PC</li>
                </ul>
            </Grid>
            <Grid item xs="5">
                <img src={toAbsoluteUrl("./homeImage.png")} width="100%"/>
            </Grid>
        </Grid>
    )
}

export default Home;