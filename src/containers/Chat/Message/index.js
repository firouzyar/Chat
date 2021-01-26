import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import {addMessage} from "./_redux/action";
import moment from "moment";
import uuid from 'react-uuid';
import {useStyles} from './style.js';
import {SendMessage} from "../../../components/SendMessageForm/sendMessage"
import MessageHolder from "../../../components/MessageHolder/MessageHolder";
import { ProfilePreview } from "../../../components/ProfilePreview/ProfilePreview";
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
    
    return(
        <div className={classes.messageWrapper}>
            <div className={classes.profileInChat}>
                <ProfilePreview data={messageDataProps}/>
            </div>
                        
            {(message && message.length>0 && !noMessage) ?
                <div className={classes.chatWrapper} ref={ref}>
                    {
                        message.map((item,index)=>{
                            return(
                                <MessageHolder key={index} item={item}/> 
                            )
                        })
                    }
                </div> :
                <div className={classes.noMessage}>
                    no message data
                </div>
                
            }
            <div className={classes.sendMessageWrapper}>
                <SendMessage sendChat={sendChat}/>
            </div>
        </div>
    )
}

export default Message;