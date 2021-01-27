import React,{useEffect,useState,Suspense, lazy} from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
//actions
import {fetchThreads,searchThreads} from "../Chat/Threads/_redux/action";
import {fetchContacts,searchContacts} from "../Chat/Contact/_redux/action";
import {fetchArchived} from "../Chat/Archived/_redux/action";
import {fetchMessage} from "../Chat/Message/_redux/action";
import {fetProfile} from "../Chat/Profile/_redux/action";
import {Loader} from "../../components/Loader/Loader";
//components
import Search from "../../components/Search/Search";
import SettingMenu from "../../components/SettingMenu/Menu";
//material component
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ChatIcon from '@material-ui/icons/Chat';
//utils
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {useStyles} from './style.js';
//import with lazy
const Profile = lazy(() => import('./Profile/index'));
const Archived = lazy(() => import('./Archived/index'));
const Contact = lazy(() => import('./Contact/index'));
const Message = lazy(() => import('./Message/index'));
const Threads = lazy(() => import('./Threads/index'));
const animationStyles = {
    slideInLeft: {
        animationDuration: '600ms',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}    

function Chat(props){
    const classes = useStyles(props);
    const {isLoading,copyThreads } = useSelector((state) => state.threads,shallowEqual);
    const {archives } = useSelector((state) => state.archives,shallowEqual);
    const {profile} = useSelector((state) => state.profile,shallowEqual);
    const {message,noMessage} = useSelector((state) => state.message,shallowEqual);
    const {copyContacts} = useSelector((state) => state.contacts,shallowEqual);
    const [ui,setUi] = useState("threads");
    const [messageData,setMessageData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchThreads());
      dispatch(fetProfile());
      dispatch(fetchArchived());
      dispatch(fetchContacts());
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
    //search threads
    function onSearchContacts(event){
        dispatch(searchContacts(event.target.value.toLowerCase()));   
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
                        <Suspense fallback={<Loader/>}>
                            <Threads threads={copyThreads} showMessage={handleMessage}/>
                        </Suspense>
                        }
                    </>
                )
            case "profile":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={animationStyles.slideInLeft} className={classes.animationWrapper} >
                        <Suspense fallback={<Loader/>}>
                            <Profile profile={profile} backHandler={showThreadsdHandler}/>
                        </Suspense> 
                        </div>
                    </StyleRoot>
                )
            case "archived":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={animationStyles.slideInLeft} className={classes.animationWrapper} >
                        <Suspense fallback={<Loader/>}>
                            <Archived  backHandler={showThreadsdHandler} archives={archives} showMessage={handleMessage}/>
                        </Suspense>
                        </div>
                    </StyleRoot>
                )
            case "contact":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={animationStyles.slideInLeft} className={classes.animationWrapper} >
                        <Suspense fallback={<Loader/>}>
                            <Contact 
                                backHandler={showThreadsdHandler} 
                                contacts={copyContacts} 
                                showMessage={handleMessage}
                                onSearchContacts={onSearchContacts}
                            />
                        </Suspense>
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
                        <Suspense fallback={<Loader/>}>
                            <Threads threads={copyThreads}/>
                        </Suspense>
                        
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
                        <Suspense fallback={<Loader/>}>
                            <Message messageDataProps={messageData} message={message} noMessage={noMessage}/>
                        </Suspense>
                        :
                        <div className={classes.noChatSelected}>Welcome to Chat Application</div>
                    }
                </div>
            </div>
        </Paper>
    )
}

export default Chat;