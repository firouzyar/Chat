import React,{useEffect} from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import * as actions from "./_redux/action";
import {Loader} from "../../components/Loader/Loader"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Threads from "../../components/Threads/Threads";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Search from "../../components/Search/Search"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    divider:{
        margin:"5px 0 30px 0"
    },
    searchWrapper:{
        margin:"15px 0 45px 0",
    }
}));


function Home(props) {
    const classes = useStyles();
    const { threads,isLoading } = useSelector((state) => state.threads, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(actions.fetchThreads());
    }, [dispatch]);

    const onSearchThreads =(event) => {
        if(event.target.value){
            dispatch(actions.searchThreads(event.target.value.toLowerCase()));
        }
        else{
            dispatch(actions.fetchThreads());
        }
      
    }
    return(
        <>
            <div className={classes.searchWrapper}>
                <Search onSearchChange={onSearchThreads} fullWidth label="Search Threads"/>
            </div>
            <Typography variant="h4" component="h1">
                Your Chats
            </Typography>
            {isLoading ? 
                <Loader/>
                :
                <>
                
                <Divider className={classes.divider}/>
                <Grid container className={classes.root} spacing={2}>
                    <Threads threads={threads}/>
                </Grid>
                </>
            }
        </>
    )
}

export default Home;