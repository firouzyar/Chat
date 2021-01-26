import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import { makeStyles } from '@material-ui/core/styles';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CheckIcon from '@material-ui/icons/Check';
import {TimeChecker} from "../../../ustils/globalUtils";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import {addMessage} from "./_redux/action";
import moment from "moment";
import uuid from 'react-uuid';
import {useStyles} from './style.js'


function Message(props) {
    const classes = useStyles(props);
    let {messageDataProps,message,noMessage}=props;
    const dispatch = useDispatch();
    const ref = React.useRef(null);
    useEffect(()=>{
       
    },[messageDataProps.id])


    function handleScroll(){
        if (ref) {
            ref.current.addEventListener('DOMNodeInserted', event => {
              const { currentTarget: target } = event;
              target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }
    function sendChat(e){
        e.preventDefault()
        const {message } = e.target.elements;
        const data={
            "id": uuid(),
            "time": moment().format('MM/DD/YYYY HH:mm:ss'),
            "text": message.value,
            "myMessage": true,
            "isSeen": false,
            "isDelivered": true,
            "image": null
          }
        dispatch(addMessage(data))
        e.target.reset();
        handleScroll();
    }
    function messagedeliverdHandler(deliverd,isSeen){
        if(deliverd ){
            if(isSeen){
                return  <DoneAllIcon className={classes.green} fontSize="small"/>  
            }
            else{
                return  <DoneAllIcon className={classes.gray} fontSize="small"/>
            }
        }
        else if(deliverd===false){
            return <CheckIcon className={classes.gray} fontSize="small"/>
        }
        else if(deliverd===undefined){
            return
        }
    }
    return(
        <div className={classes.messageWrapper}>
            <div className={classes.profileInChat}>
                <Avatar  
                    src={messageDataProps.picture} 
                    alt={messageDataProps.fistName} 
                    className={classes.large} 
                />
                <span>{messageDataProps.title}</span>
              
            </div>
                        
            {(message && message.length>0 && !noMessage) ?
                <div className={classes.chatWrapper} ref={ref}>
                    {
                        message.map((item,index)=>{
                            return(
                                <div key={index} className={classes.singleMessageWrapper} style={{direction:item.myMessage?"rtl":"ltr"}}>
                                    <span className={classes.innerMessage} >
                                        {item.senderName && <span className={classes.sender}>{item.senderName}</span>}
                                        <p>{parse(item.text)}</p>
                                        {item.image && <img src={item.image} alt={item.text} className={classes.img}/>}
                                        <span className={classes.info}>
                                            {messagedeliverdHandler(item.isDelivered,item.isSeen) }
                                            {TimeChecker(item.time)}
                                        </span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div> :
                <div className={classes.noMessage}>
                    no message data
                </div>
                
            }
            <div className={classes.sendMessageWrapper}>
                <form onSubmit={sendChat}>
                    <TextField
                        variant="outlined"
                        id="message"
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
            </div>
        </div>
    )
}

export default Message;