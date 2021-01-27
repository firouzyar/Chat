import React from "react";
import {Header} from "../../../components/Header/Header";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Items from "../../../components/ListItem/ListItem";
import {useStyles} from './style.js'
function Archived(props) {
    const {backHandler,archives,showMessage} = props;
    const classes = useStyles(props);
    return(
        <>
        <Header title="Archived" backHandler={backHandler}/>
        <List aria-labelledby="threads list" component="div" className={classes.ListWrapper}>
            <>
            {archives && archives.map((item,index)=>{
                return(
                <div key={index}>
                    <Items data={item} showMessage={showMessage} key={index} archived/>
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

export default Archived;