import React from "react";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Items from "../../../components/ListItem/ListItem";
import {useStyles} from './style.js'

function Threads(props){
    const classes = useStyles(props);
    const {threads,showMessage} =props;
    return(
       <>
            <List aria-labelledby="threads list" component="div" className={classes.threadsWrapper}>
                <>
                {threads && threads.map((thread,index)=>{
                    return(
                    <div key={index}>
                        <Items data={thread} showMessage={showMessage} key={index}/>
                        <Divider variant="inset"  />
                    </div>
                    )
                })
                }
                </>
            </List>
        </> 
    )
}
export default Threads;