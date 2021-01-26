import React,{memo} from "react";
import {TimeChecker} from "../../ustils/globalUtils";
import parse from "html-react-parser";
import {useStyles} from './style.js';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CheckIcon from '@material-ui/icons/Check';

const MessageHolder = ({item}) => {
    const classes = useStyles();
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
        <div className={classes.singleMessageWrapper} style={{direction:item.myMessage?"rtl":"ltr"}}>
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
}

export default memo(MessageHolder);