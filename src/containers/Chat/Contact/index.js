import React from "react";
import {Header} from "../../../components/Header/Header";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Items from "../../../components/ListItem/ListItem";
import Search from "../../../components/Search/Search";
import {useStyles} from './style.js';
function Contact(props) {
    const {backHandler,contacts,showMessage,onSearchContacts} = props;
    const classes = useStyles(props);
    return(
        <>
        <Header title="Contacts" backHandler={backHandler}/>
        <div className={classes.searchWrapper}>
            <Search onSearchChange={onSearchContacts} fullWidth label="Search contacts" />
        </div>
        <List aria-labelledby="threads list" component="div" className={classes.ListWrapper}>
            <>
            {contacts && contacts.map((item,index)=>{
                return(
                <div key={index}>
                    <Items data={item}  key={index} contact showMessage={showMessage}/>
                    <Divider variant="inset" />
                </div>
                )
            })
            }
            </>
        </List>
        </>
    )
}

export default Contact;