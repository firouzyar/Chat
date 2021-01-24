import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Items from "../../../components/ListItem/ListItem";

const useStyles = makeStyles((theme) => ({
    threadsWrapper:{
        padding:"0",
        overflowY:"scroll",
        height:"100%",
    },
}));
function Threads(props){
    const classes = useStyles();
    const {threads} =props;
    return(
       <>
            <List aria-labelledby="threads list" component="div" className={classes.threadsWrapper}>
                <>
                {threads && threads.map((thread,index)=>{
                    return(
                    <div key={index}>
                        <Items data={thread} key={index}/>
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