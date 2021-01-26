import React,{useEffect,useState} from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import {fetchThreads,searchThreads} from "../Chat/Threads/_redux/action";
import {fetchMessage} from "../Chat/Message/_redux/action";
import {fetProfile} from "../Chat/Profile/_redux/action";
import {Loader} from "../../components/Loader/Loader"
import Threads from "./Threads/index";
import Search from "../../components/Search/Search";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ChatIcon from '@material-ui/icons/Chat';
import SettingMenu from "../../components/SettingMenu/Menu"
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Profile from "./Profile/index";
import Archived from "./Archived/index";
import Contact from "./Contact/index";
import Message from "./Message/index";
import {useStyles} from './style.js'

const animationStyles = {
    slideInLeft: {
        animationDuration: '600ms',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}    

function Chat(props){
    const classes = useStyles(props);
    const {isLoading,copyThreads } = useSelector((state) => state.threads,shallowEqual);
    const {profile} = useSelector((state) => state.profile,shallowEqual);
    const {message,noMessage} = useSelector((state) => state.message,shallowEqual);
    const [ui,setUi] = useState("threads");
    const [messageData,setMessageData] = useState({});
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchThreads());
      dispatch(fetProfile());
    }, [dispatch]);

    //show message of a chat bace on id
    function handleMessage(data){
        setMessageData(data)
        dispatch(fetchMessage(data.id))
    }
    //search threads
    function onSearchThreads(event){
        dispatch(searchThreads(event.target.value.toLowerCase()));   
    }
    //show profile
    function showProfileHandler(){
        setUi("profile")
    }
    // new chat
    function showNewChatHandler(){
        setUi("contact")
    }
    // show archived
    function showArchivedHandler(){
        setUi("archived");
    }
    // show threads
    function showThreadsdHandler(){
        setUi("threads");
    }
    // render ui baced on actions
    function renderUi(){
        switch(ui){
            case "threads":
                return(
                    <>
                        <div className={classes.settingWrapper}>
                        <Avatar  
                            src={profile.picture} 
                            alt={profile.fistName} 
                            className={classes.large} 
                            onClick={showProfileHandler}
                        />
                        <div>
                            <Tooltip title="New Chat">
                                <IconButton aria-label="new Chat" onClick={showNewChatHandler}>
                                    <ChatIcon />
                                </IconButton>
                            </Tooltip>
                            <SettingMenu showArchivedHandler={showArchivedHandler}/>
                        </div>
                        </div>
                        <div className={classes.searchWrapper}>
                            <Search onSearchChange={onSearchThreads} fullWidth label="Search Threads" />
                        </div>
                        {isLoading ? 
                        <Loader/>:
                        <Threads threads={copyThreads} showMessage={handleMessage}/>
                        }
                    </>
                )
            case "profile":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={animationStyles.slideInLeft} className={classes.animationWrapper} >
                            <Profile profile={profile} backHandler={showThreadsdHandler}/>
                        </div>
                    </StyleRoot>
                )
            case "archived":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={animationStyles.slideInLeft} className={classes.animationWrapper} >
                            <Archived  backHandler={showArchivedHandler}/>
                        </div>
                    </StyleRoot>
                )
            case "contact":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={animationStyles.slideInLeft} className={classes.animationWrapper} >
                            <Contact backHandler={showNewChatHandler}/>
                        </div>
                    </StyleRoot>
                )
            default:
                return(
                    <>
                        <div className={classes.settingWrapper}>
                        <Avatar  
                            src={profile.picture} 
                            alt={profile.fistName} 
                            className={classes.large} 
                            onClick={showProfileHandler}
                        />
                        <div>
                            <Tooltip title="New Chat">
                                <IconButton aria-label="new Chat" onClick={showNewChatHandler}>
                                    <ChatIcon />
                                </IconButton>
                            </Tooltip>
                            <SettingMenu showArchivedHandler={showArchivedHandler}/>
                        </div>
                        </div>
                        <div className={classes.searchWrapper}>
                            <Search onSearchChange={onSearchThreads} fullWidth label="Search Threads" />
                        </div>
                        {isLoading ? 
                        <Loader/>:
                        <Threads threads={copyThreads}/>
                        }
                    </>
                )
        }
    }
    return(
        <Paper elevation={2} className={classes.root}>
            <div className={classes.chatWrapper}>
                <div className={classes.container}>
                    {renderUi()}
                </div>
                <div className={classes.messageWrapper}>
                    {Object.keys(messageData).length !== 0 && messageData.constructor === Object ?
                        <Message messageDataProps={messageData} message={message} noMessage={noMessage}/>:
                        <div className={classes.noChatSelected}>Welcome to Chat Application</div>
                    }
                </div>
            </div>
        </Paper>
    )
}

export default Chat;