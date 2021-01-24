import React,{useEffect,useState} from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import {fetchThreads,searchThreads} from "../Chat/Threads/_redux/action";
import {fetProfile} from "../Chat/Profile/_redux/action";
import {Loader} from "../../components/Loader/Loader"
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position:"absolute",
        top:"30px",
        bottom:"30px",
        left:"240px",
        right:"240px",
        overflow:"hidden",
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        cursor:"pointer",
    },
    chatWrapper:{
        display:"flex",
        height:"100%",
    },
    container:{
        flex:"1",
        height:"100%",
    },
    messageWrapper:{
        flex:"3",
        height:"100%",
    },
    searchWrapper:{
        padding:"10px",
        background:"#f6f6f6",
    },
    settingWrapper:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        background:"#ededed",
        padding:"10px 20px",
    },
    animationWrapper:{
        height:"100%",
    },
    
}));
const styles = {
    slideInLeft: {
        animationDuration: '600ms',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}    

function Chat(){
    const classes = useStyles();
    const {isLoading,copyThreads } = useSelector((state) => state.threads,shallowEqual);
    const {profile} = useSelector((state) => state.profile,shallowEqual);
    const [ui,setUi] = useState("threads");
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchThreads());
      dispatch(fetProfile());
    }, [dispatch]);

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
                        <Threads threads={copyThreads.reverse()}/>
                        }
                    </>
                )
            case "profile":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={styles.slideInLeft} className={classes.animationWrapper} >
                            <Profile profile={profile} backHandler={showThreadsdHandler}/>
                        </div>
                    </StyleRoot>
                )
            case "archived":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={styles.slideInLeft} className={classes.animationWrapper} >
                            <Archived  backHandler={showArchivedHandler}/>
                        </div>
                    </StyleRoot>
                )
            case "contact":
                return(
                    <StyleRoot style={{height:"100%"}}>
                        <div style={styles.slideInLeft} className={classes.animationWrapper} >
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
                        <Threads threads={copyThreads.reverse()}/>
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
                    asdasd
                </div>
            </div>
        </Paper>
    )
}

export default Chat;