import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        marginTop:"100px",
        "& img":{
            width:"100%",
            height:"auto",
        }
    }
}));

export { useStyles };

