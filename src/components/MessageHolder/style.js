import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

    singleMessageWrapper:{
        margin:"7px",
    },
    innerMessage:{
        maxWidth:"300px",
        padding:"10px 20px",
        background:"#fff",
        borderRadius:"6px",
        boxShadow:"0 2.8px 2.2px rgba(0, 0, 0, 0.034)",
        margin:"0 0 5px 0",
        maxWidth:"350px",
        display:"inline-block",
        "& p":{
          margin:"0 0 5px 0"
          
        }
    },
    img:{
        width:"250px",
        height:"auto",
    },
    info:{
        display:"flex",
        fontStyle:"italic",
        fontSize:"12px",
        color:"#9e9e9e",
        marginTop:"15px",
        "& svg":{
            marginLeft:"10px"
        }
    },
    green:{
        color:"#43ca0bde",
    },
    gray:{
        color:"#a5a5a5de",
    },

    sender:{
        fontWeight:"bold",
        display:"flex",
        marginBottom:"10px",
        color:"green"
    },


    sendMessageWrapper:{
        padding:"10px",
        background:"#eee",
        "& div":{
            background:"#fff",
        }
    }
}));

export { useStyles };

