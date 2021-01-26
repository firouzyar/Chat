import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        height:"100%",
        background:"#eee",
    },
    header:{
        background:"#0bc1ea",
        color:"#fff",
        display: "flex",
        alignItems: "center",
        padding:" 15px",
    },
    backIcon:{
        color:"#fff",
        marginRight:"10px",
    },
    ImageContainer:{
        display:"flex",
        justifyContent:"center",
        padding:"30px 15px",
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    infoContainer:{
        background:"#fff",
        margin:"15px 0",
        padding:"15px",
        display:"flex",
        flexDirection:"column",
        "& p":{
            margin:"15px 0 0 0",
            fontSize:"20px",
            color:"#949494",
        },
        "& span":{
            color:"#0bc1ea",
            fontSize:"14px"
        }
    }
}));

export { useStyles };

